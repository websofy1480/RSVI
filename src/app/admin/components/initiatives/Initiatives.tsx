"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip, { TooltipProps } from "../common/Tooltip";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import { InitiativesModel } from "./InitiativesModel";
import Pagination from "../common/Pagination";
import { initiatives } from "@/types/initiativesContext";
import { Form, Mode } from "@/types/modelContext";
import { ApiResponseProps } from "@/types/apiResponseContext";
import { searchKeys, SearchState, updateStateField } from "@/types/searchState";

export const Initiatives = () => {
    const [data, setData] = useState<initiatives[]>([]);
    const [modal, setModal] = useState<{ mode: Mode; item?: initiatives } | null>(null);
    const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const [initiativesDescription, setInitiativesDescription] = useState("");
    const [showDescription, setShowDescription] = useState(false);

    const showTooltip = ({ message, type = "info" }: TooltipProps) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const [search, setSearch] = useState<SearchState>({ title: "", "initiatives type": "" });

    const fetchData = async () => {
        const initiativesRes = await fetch("/api/auth/initiatives")
        const initiativesJson = await initiativesRes.json();
        setData(initiativesJson.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.title!.toLowerCase()) &&
        item.initiativesType?.toLowerCase().includes(search["initiatives type"]!.toLowerCase())
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
        let data: ApiResponseProps<initiatives>;

        try {
            if (modal.mode === "create") {
                res = await fetch("/api/auth/initiatives", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/initiatives/${modal.item?._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else {
                res = await fetch(`/api/auth/initiatives/${modal.item?._id}`, {
                    method: "DELETE",
                });
            }
            data = (await res.json()) as ApiResponseProps<initiatives>;
            if (res.ok) {
                showTooltip({ message: data?.message ?? "Success", type: "success" });
            } else {
                showTooltip({ message: data.message ?? "Something went wrong", type: "error" });
            }
        } catch (error) {
            console.log("Internal Server Error ", error)
            showTooltip({ message: "Internal Server Error", type: "error" });
        } finally {
            setLoading(false);
            setModal(null);
            fetchData();
        }
    };

    return (
        <div className="p-4">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <PageBreadcrumb pageTitle="Initiatives" />
            <div className="flex justify-end items-center mb-4">
                <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/90">
                    + Add Initiatives
                </button>
            </div>
            <div className="flex gap-3 mb-4">
                {searchKeys.slice(1)?.map((key) => (
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
                        <th className="py-2 px-3 border">Initiatives Type</th>
                        <th className="py-2 px-3 border">Description</th>
                        <th className="py-2 px-3 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item._id} className="text-center">
                            <td className="border text-center border-formbg shadow-md shadow-formbg/50 p-2">{item.title}</td>
                            <td className="border text-center border-formbg shadow-md shadow-formbg/50 p-2">{item.initiativesType}</td>
                            <td className="border border-formbg shadow-md shadow-formbg/50 p-2 items-center text-justify flex gap-1"
                            >
                                <span className="w-[20em]">
                                    {item.description.substring(0, 30)}...
                                </span>

                                <span onClick={() => { setInitiativesDescription(item.description), setShowDescription(!showDescription); }}
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
                <InitiativesModel
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
                showDescription && <MessageModel closedModel={setShowDescription} data={initiativesDescription} mode="initiatives" />
            }
        </div>
    );
}

