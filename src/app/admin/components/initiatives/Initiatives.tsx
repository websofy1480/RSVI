"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import InitiativesModel from "./InitiativesModel";
import Pagination from "../common/Pagination";

export default function Initiatives() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [modal, setModal] = useState<{ mode: string; item?: any } | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
        null
    );

    const [initiativesDescription, setInitiativesDescription] = useState("");
    const [showDescription, setShowDescription] = useState(false);

    const showTooltip = (
        message: string,
        type: "success" | "error" | "info" = "info"
    ) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const [search, setSearch] = useState({ title: "", category: "" });

    const fetchData = async () => {
        const initiativesRes = await fetch("/api/auth/initiatives")
        const initiativesJson = await initiativesRes.json();
        setData(initiativesJson.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter(
        (item) =>
            // item.title.toLowerCase().includes(search.title.toLowerCase()) &&
            // item.category.toLowerCase().includes(search.category.toLowerCase())
            item.title.toLowerCase().includes(search.title.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / recordsPerPage);
    const currentData = filteredData.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSave = async (form: any) => {
        if (!modal) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let res: any = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let data: any = null;

        try {
            if (modal.mode === "create") {
                res = await fetch("/api/auth/initiatives", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/initiatives/${modal.item._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else if (modal.mode === "delete") {
                res = await fetch(`/api/auth/initiatives/${modal.item._id}`, {
                    method: "DELETE",
                });
            }
            data = await res.json();
            if (res.ok) {
                showTooltip(data?.message, "success");
            } else {
                showTooltip(data.message || "Something went wrong", "error");
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error) {
            console.log("Internal Server Error ", error)
            showTooltip("Internal Server Error", "error");
        } finally {
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
                {["title", "category"].map((key) => (
                    <input
                        key={key}
                        type="text"
                        placeholder={`Search by ${key}`}
                        className="border px-2 py-1 rounded"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        value={(search as any)[key]}
                        onChange={(e) => setSearch({ ...search, [key]: e.target.value })}
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
                                    <button onClick={() => setModal({ mode: "edit", item })} className="bg-green-600 cursor-pointer text-white px-3 py-1 rounded">
                                        Edit
                                    </button>
                                    <button onClick={() => setModal({ mode: "delete", item })} className="bg-red-600 cursor-pointer text-white px-3 py-1 rounded">
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
                />
            )}
            {
                showDescription && <MessageModel closedModel={setShowDescription} data={initiativesDescription} mode="initiatives" />
            }
        </div>
    );
}

