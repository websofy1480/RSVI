"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip, { TooltipProps } from "../common/Tooltip";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import { ActivitiesModel } from "./ActivitiesModel";
import Pagination from "../common/Pagination";
import { successStory } from "@/types/successStoryContext";
import { Form, Mode } from "@/types/modelContext";
import { ApiResponseProps } from "@/types/apiResponseContext";
import { searchKeys, SearchState, updateStateField } from "@/types/searchState";

export const Activity = () => {
  const [data, setData] = useState<successStory[]>([]);
  const [modal, setModal] = useState<{ mode: Mode; item?: successStory } | null>(null);
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [activityDescription, setActivityDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const showTooltip = (
    { message, type = "info" }: TooltipProps
  ) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const [search, setSearch] = useState<SearchState>({ title: "" });

  const fetchData = async () => {
    const perksRes = await fetch("/api/auth/activity");
    const perksResJson = await perksRes.json();
    setData(perksResJson.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
      item.title?.toLowerCase().includes(search.title!.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleSave = async (form: Form) => {
    if (!modal) return;
    setLoading(true);
    let res: Response;
    let data: ApiResponseProps<successStory>;
    
    try {
      if (modal.mode === "create") {
        res = await fetch("/api/auth/activity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/activity/${modal.item?._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`/api/auth/activity/${modal.item?._id}`, {
          method: "DELETE",
        });
      }
      data = (await res.json()) as ApiResponseProps<successStory>;
      if (res.ok) {
        showTooltip({ message: data?.message ?? "Success", type: "success" });
      } else {
        showTooltip({ message: data.message ?? "Something went wrong", type: "error" });
      }
    } catch (error) {
      console.log("Internal Server Error ", error)
      showTooltip({ message: "Internal Server Error", type: "error" });
    } finally {
      setModal(null);
      fetchData();
    }
  };

  return (
    <div className="p-4">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <PageBreadcrumb pageTitle="Activities" />
      <div className="flex justify-end items-center mb-4">
        <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/90">
          + Add Activity
        </button>
      </div>
      <div className="flex gap-3 mb-4">
        {searchKeys.slice(1, 2)?.map((key) => (
          <input
            key={key}
            type="text"
            placeholder={`Search by ${key}`}
            className="border px-2 py-1 rounded"
            value={search[key] ?? ""}
            onChange={(e) => updateStateField(setSearch, key, e.target.value)}
          />
        ))}
      </div>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-formbg/30">
            <th className="py-2 px-3 border">Title</th>
            <th className="py-2 px-3 border">Description</th>
            <th className="py-2 px-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item._id} className="text-center">
              <td className="border text-center border-formbg shadow-md shadow-formbg/50 p-2">{item.title}</td>
              <td className="border border-formbg shadow-md shadow-formbg/50 p-2 items-center text-justify flex gap-1"
              >
                <span className="w-[32em]">{item.description.substring(0, 65)}...</span>

                <span className="" onClick={() => { setActivityDescription(item.description), setShowDescription(!showDescription) }}
                >
                  {showDescription ? (
                    <IoEyeOutline size={17} className="text-gray-500 cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline size={17} className="text-gray-500 cursor-pointer" />
                  )}
                </span>
              </td>
              <td className="border text-center border-formbg shadow-md shadow-formbg/50">
                <div className="flex mx-1 gap-2 justify-center">
                  <button onClick={() => setModal({ mode: "edit", item })} className="bg-success cursor-pointer text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => setModal({ mode: "delete", item })} className="bg-error cursor-pointer text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      }

      {modal && (
        <ActivitiesModel
          mode={modal.mode}
          initialData={modal.item}
          onClose={() => setModal(null)}
          onSave={handleSave}
          loading={loading}
          setLoading={setLoading}
          showTooltip={showTooltip}
          tooltip={tooltip}
        />
      )}
      {
        showDescription && <MessageModel closedModel={setShowDescription} data={activityDescription} mode="activities" />
      }
    </div>
  );
}

