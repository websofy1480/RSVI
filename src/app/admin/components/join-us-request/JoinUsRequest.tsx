"use client";
import { useEffect, useState, useMemo } from "react";
import { ArrowUpDown } from "lucide-react";
import { Radio } from "react-loader-spinner";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import Pagination from "../common/Pagination";

export default function JoinUsRequest() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [enquiries, setEnquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState<
        "name" | "phone" | "department" | "date" | null
    >(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [showMessage, setShowMessage] = useState(false);

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const recordsPerPage = 10;

    const [joinUsRecord, setJoinUsRecord] = useState({
        name: "",
        phone: "",
        department: "",
        message: "",
        date: ""
    });


    const handleOnChange = (name: string, phone: string, department: string, message: string, date: string) => {
        setJoinUsRecord({ ...joinUsRecord, name: name, phone: phone, department: department, message: message, date: date })
    }

    useEffect(() => {
        const fetchEnquiris = async () => {
            try {
                const res = await fetch("/api/auth/join-us");
                if (!res.ok) throw new Error("Failed to fetch");
                const result = await res.json();
                setEnquiries(result?.data || []);
            } catch (error) {
                console.error("Error fetching collaborate records:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEnquiris();
    }, []);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getFieldValue = (item: any, field: "name" | "phone" | "department" | "date") => {
        switch (field) {
            case "name":
                return String(item.name ?? "").toLowerCase();
            case "department":
                return String(item.department ?? "").toLowerCase();
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
        const filtered = enquiries.filter((d) => {
            const department = String(d.department ?? "").toLowerCase();
            const phone = String(d.phone ?? "");

            const matchesSearch =
                !term ||
                department.includes(term) ||
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
    }, [enquiries, searchTerm, sortField, sortOrder, fromDate, toDate]);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.max(1, Math.ceil(filteredData.length / recordsPerPage));

    const exportToCSV = () => {
        const csvRows = [
            ["Si. No.", "Name", "Phone No.", "Department", "Message", "Date"],
            ...filteredData.map((d, i) =>
                [i + 1, d.name, d.phone, d.department, d.message, new Date(d?.createdAt).toLocaleDateString("en-IN")]),
        ];
        const csvContent =
            "data:text/csv;charset=utf-8," + csvRows.map((e) => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "rsvi_join-us_records.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSort = (field: "name" | "phone" | "department" | "date") => {
        if (sortField === field) {
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
        setCurrentPage(1);
    };

    return (
        <div className="p-4">
            <PageBreadcrumb pageTitle="Join Us Request" />
            <div className="flex items-start justify-between gap-12">
                <div className="flex sm:flex-row justify-start items-center mb-6 gap-4">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search by Phone Or Department"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="border px-3 py-2 rounded-lg w-full sm:w-[18em] focus:ring focus:ring-formbg/80 outline-none"
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
                    className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-learning/80 transition"
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
                                <th
                                    onClick={() => handleSort("department")}
                                    className="px-6 py-3 text-left text-sm font-semibold text-black cursor-pointer select-none"
                                >
                                    <div className="flex items-center gap-1">
                                        Department
                                        <ArrowUpDown
                                            className={`w-4 h-4 transition-transform ${sortField === "department"
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
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {currentRecords.map((record, index) => (
                                <tr key={record._id} className="hover:bg-formbg/10 transition-colors">
                                    <td className="px-6 py-4 text-sm text-SlateBlueText">
                                        {(currentPage - 1) * recordsPerPage + index + 1}.
                                    </td>
                                    <td className="px-6 py-4 text-sm text-SlateBlueText">{record?.name}</td>
                                    <td className="px-6 py-4 text-sm text-SlateBlueText">{record?.phone}</td>
                                    <td className="px-6 py-4 text-sm text-SlateBlueText">{record?.department}</td>
                                    <td className="py-4 text-sm w-48 items-center justify-center flex gap-1 text-SlateBlueText">
                                        <span className="w-[32em]">{record.message.substring(0, 20)}...</span>

                                        <span onClick={() => {
                                            handleOnChange(record.name, record.phone, record.department, record.message, new Date(record?.createdAt).toLocaleDateString("en-IN"));
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
                showMessage && <MessageModel closedModel={setShowMessage} data={joinUsRecord} mode="join-request" />
            }
        </div>
    );
}



