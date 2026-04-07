"use client";
import { useEffect, useState, useMemo } from "react";
import { ArrowUpDown } from "lucide-react";
import { Radio } from "react-loader-spinner";
import { PageBreadcrumb } from "../common/PageBreadCrumb";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MessageModel } from "../common/MessageModel";
import { Pagination } from "../common/Pagination";
import { TooltipProps, Tooltip } from "../common/Tooltip";
import { LuToggleLeft, LuToggleRight } from "react-icons/lu";
import { collab } from "@/types/collabContext";
import { Mode } from "@/types/modelContext";
import { ApiResponseProps } from "@/types/apiResponseContext";

export const Collaborator: React.FC = () => {
  const [collabs, setCollabs] = useState<collab[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<
    "name" | "phone" | "email" | "date" | null
  >(null);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showMessage, setShowMessage] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipProps | null>(
    null
  );

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const recordsPerPage = 10;

  const [collabRecord, setCollabRecord] = useState({
    name: "",
    phone: "",
    email: "",
    collaborationsType: "",
    message: "",
    date: "",
    image: "",
    isVerified: false
  });

  const showTooltip = ({ message, type = "info" }: TooltipProps) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const handleOnChange = (name: string, phone: string, email: string,
    collaborationsType: string,
    message: string, date: string, imageSrc: string, verified: boolean) => {
    setCollabRecord({ ...collabRecord, name: name, phone: phone, collaborationsType: collaborationsType, email: email, message: message, date: date, image: imageSrc, isVerified: verified });
  }

  const fetchCollab = async () => {
    try {
      const res = await fetch("/api/auth/collaborate");
      if (!res.ok) throw new Error("Failed to fetch");
      const result = await res.json();
      setCollabs(result?.data || []);
    } catch (error) {
      console.error("Error fetching collaborate records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollab();
  }, []);

  const getFieldValue = (item: collab, field: "name" | "phone" | "email" | "date") => {
    switch (field) {
      case "name":
        return String(item.name ?? "").toLowerCase();
      case "email":
        return String(item.email ?? "").toLowerCase();
      case "phone": {
        const raw = String(item.phone ?? "");
        const digits = raw.replace(/\D/g, "");
        return digits === "" ? 0 : Number(digits);
      }
      case "date":
        return new Date(item.createdAt).getTime();
    }
  };

  const filteredData = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const filtered = collabs.filter((d) => {
      const email = String(d.email ?? "").toLowerCase();
      const phone = String(d.phone ?? "");

      const matchesSearch =
        !term ||
        email.includes(term) ||
        phone.includes(term)
      const recordDate = new Date(d.createdAt).getTime();
      const from = fromDate ? new Date(fromDate).getTime() : null;
      const to = toDate ? new Date(toDate).getTime() : null;
      const matchesDate =
        (!from || recordDate >= from) &&
        (!to || recordDate <= to);
      return matchesSearch && matchesDate;
    });

    if (sortField) {
      filtered.sort((a, b) => {
        const aVal = getFieldValue(a, sortField);
        const bVal = getFieldValue(b, sortField);

        if (sortField === "date" || sortField === "phone") {
          return sortOrder === "asc"
            ? Number(aVal) - Number(bVal)
            : Number(bVal) - Number(aVal);
        }

        return sortOrder === "asc"
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }
    return filtered;
  }, [collabs, searchTerm, sortField, sortOrder, fromDate, toDate]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.max(1, Math.ceil(filteredData.length / recordsPerPage));

  const exportToCSV = () => {
    const csvRows = [
      ["Si. No.", "Name", "Phone No.", "Email", "Collaborations Type", "Message", "Date"],
      ...filteredData.map((d, i) =>
        [i + 1, d.name, d.phone, d.email, d.collaborationsType, d.message, new Date(d?.createdAt).toLocaleDateString("en-IN")]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," + csvRows.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "rsvi_collab_records.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSort = (field: "name" | "phone" | "email" | "date") => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };


  const handleAction = async (mode: Mode, id: string, newVerified?: boolean) => {
    if (!mode) return;
    let res: Response;
    let data: ApiResponseProps<collab>;

    try {
      if (mode === "edit") {
        res = await fetch(`/api/auth/collaborate/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...collabs, verified: newVerified }),
        });
      } else {
        res = await fetch(`/api/auth/collaborate/${id}`, {
          method: "DELETE",
        });
      }
      data = (await res.json()) as ApiResponseProps<collab>;

      if (res?.ok) {
        data?.success ? showTooltip({ message: data?.message ?? "Success", type: "success" }) : showTooltip({ message: data?.message ?? "Error", type: "error" })
      } else {
        showTooltip({ message: data?.message || "Something went wrong", type: "error" });
      }
    } catch (error) {
      const err = error as Error;
      console.log("Internal Server Error ", err)
      showTooltip({ message: "Internal Server Error", type: "error" });
    } finally {
      fetchCollab();
    }
  }

  return (
    <div className="p-4">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <PageBreadcrumb pageTitle="Collaborator" />

      <div className="flex items-start justify-between gap-12">
        <div className="flex sm:flex-row justify-start items-center mb-6 gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by Email Or Phone"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border px-3 py-2 rounded-lg w-full sm:w-[15em] focus:ring focus:ring-formbg/80 outline-none"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="fromDate">From</label>
              <input
                type="date"
                id="fromDate"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="border px-3 py-2 rounded-lg focus:ring focus:ring-formbg/80 outline-none cursor-pointer"
              />
            </div>

            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="toDate">To</label>
              <input
                id="toDate"
                type="date"
                value={toDate}
                onChange={(e) => {
                  setToDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="border px-3 py-2 rounded-lg focus:ring focus:ring-formbg/80 outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>
        <button
          onClick={exportToCSV}
          className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-learning/90 transition"
        >
          Export CSV
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center text-center">
          <Radio
            visible={true}
            height="150"
            width="150"
            colors={["#3c3c30", "#727057", "#727057"]}
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : filteredData.length === 0 ? (
        <div className="text-center text-primary">No matching records found.</div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-formbg">
            <thead className="bg-formbg/30">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black">
                  Sn. No.
                </th>
                <th
                  onClick={() => handleSort("name")}
                  className="px-6 py-3 text-left text-sm font-semibold text-black cursor-pointer select-none"
                >
                  <div className="flex items-center gap-1">
                    Name
                    <ArrowUpDown
                      className={`w-4 h-4 transition-transform ${sortField === "name"
                        ? sortOrder === "asc"
                          ? "rotate-180 text-learning"
                          : "text-learning"
                        : "text-primary"
                        }`}
                    />
                  </div>
                </th>
                <th
                  onClick={() => handleSort("phone")}
                  className="px-6 py-3 text-left text-sm font-semibold text-black cursor-pointer select-none"
                >
                  <div className="flex items-center gap-1">
                    Phone
                    <ArrowUpDown
                      className={`w-4 h-4 transition-transform ${sortField === "phone"
                        ? sortOrder === "asc"
                          ? "rotate-180 text-learning"
                          : "text-learning"
                        : "text-primary"
                        }`}
                    />
                  </div>
                </th>

                <th className="px-6 py-3 text-left text-sm font-semibold text-black select-none">
                  <div className="flex items-center gap-1">Message</div>
                </th>
                <th
                  onClick={() => handleSort("date")}
                  className="px-6 py-3 text-left text-sm font-semibold text-black cursor-pointer select-none"
                >
                  <div className="flex items-center gap-1">
                    Date
                    <ArrowUpDown
                      className={`w-4 h-4 transition-transform ${sortField === "date"
                        ? sortOrder === "asc"
                          ? "rotate-180 text-learning"
                          : "text-learning"
                        : "text-primary"
                        }`}
                    />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black select-none">
                  <div className="flex items-center gap-1">Verified</div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-black select-none">
                  <div className="flex items-center gap-1">Actions</div>
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {currentRecords.map((record, index) => (
                <tr key={record._id} className="hover:bg-formbg/10 transition-colors">
                  <td className="px-6 py-4 text-sm text-SlateBlueText">
                    {(currentPage - 1) * recordsPerPage + index + 1}.
                  </td>
                  <td className="px-6 py-4 text-sm text-SlateBlueText">{record.name}</td>
                  <td className="px-6 py-4 text-sm text-SlateBlueText">{record.phone}</td>
                  {/* <td className="px-6 py-4 text-sm text-SlateBlueText">{record.email}</td> */}
                  <td className="py-4 text-sm w-48 items-center justify-center flex gap-1 text-SlateBlueText">
                    <span className="w-[32em]">{record.message.substring(0, 20)}...</span>
                    <span onClick={() => {
                      handleOnChange(record.name, record.phone, record.email, record.collaborationsType, record.message, new Date(record?.createdAt).toLocaleDateString("en-IN"), record.image, record.isVerified);
                      setShowMessage(!showMessage);
                    }}>
                      {showMessage ? (
                        <IoEyeOutline size={17} className="text-primary cursor-pointer" />
                      ) : (
                        <IoEyeOffOutline size={17} className="text-primary cursor-pointer" />
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-SlateBlueText">{
                    new Date(record?.createdAt).toLocaleDateString("en-IN")
                  }</td>

                  <td className="px-6 py-4 text-sm text-SlateBlueText">

                    {
                      record.isVerified ?
                        <div className="flex items-center justify-cente gap-2">
                          <span className="w-20">Verified</span>
                          <LuToggleRight size={20} className="text-success cursor-pointer" onClick={() => handleAction("edit", record._id!, !record.isVerified)} />
                        </div> :
                        <div className="flex items-center justify-cente gap-2">
                          <span className="w-20">Not Verified</span>
                          <LuToggleLeft size={20} className="text-error cursor-pointer" onClick={() => handleAction("edit", record._id!, !record.isVerified)} />
                        </div>
                    }
                  </td>
                  <td className="px-6 py-4 text-sm text-SlateBlueText">
                    <button onClick={() => handleAction("delete", record._id!)} className="bg-error cursor-pointer text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {
        totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      }
      {
        showMessage && <MessageModel closedModel={setShowMessage} data={collabRecord} mode="collab" />
      }
    </div>
  );
}



