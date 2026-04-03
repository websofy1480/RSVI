"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip, { TooltipProps } from "../common/Tooltip";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../common/MessageModel";
import { FaqModel } from "./FaqModel";
import Pagination from "../common/Pagination";
import { faq } from "@/types/faqContext";
import { Form, Mode } from "@/types/modelContext";
import { ApiResponseProps } from "@/types/apiResponseContext";
import { searchKeys, SearchState, updateStateField } from "@/types/searchState";

export const Faq = () => {
    const [data, setData] = useState<faq[]>([]);
    const [modal, setModal] = useState<{ mode: Mode; item?: faq } | null>(null);
    const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const [showMessage, setShowMessage] = useState(false);
    const [userFaq, setUserFaq] = useState({ question: "", answer: [] as string[] });

    const handleOnChange = (question: string, answer: string[],) => {
        setUserFaq({ ...userFaq, question: question, answer: answer });
    }

    const showTooltip = (
        { message, type = "info" }: TooltipProps) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const [search, setSearch] = useState<SearchState>({ question: "" });

    const fetchData = async () => {
        const res = await fetch("/api/auth/faq");
        const faqJson = await res.json();
        setData(faqJson.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        item.question.toLowerCase().includes(search.question!.toLowerCase())
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
        let data: ApiResponseProps<faq>;

        try {
            if (modal.mode === "create") {
                res = await fetch("/api/auth/faq", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/faq/${modal.item?._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else {
                res = await fetch(`/api/auth/faq/${modal.item?._id}`, {
                    method: "DELETE",
                });
            }

            data = (await res.json()) as ApiResponseProps<faq>;
            if (res.ok) {
                showTooltip({ message: data?.message ?? "Success", type: "success" });
            } else {
                showTooltip({ message: data.message ?? "Something went wrong", type: "error" });
            }
        } catch (error) {
            const err = error as Error;
            console.log("Internal Server Error ", err)
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
            <PageBreadcrumb pageTitle="FAQs" />
            <div className="flex justify-end items-center mb-4">
                <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/80">
                    + Add FAQ
                </button>
            </div>

            <div className="flex gap-3 mb-4 w-[15em]">
                {[searchKeys[4]].map((key) => (
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
            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-formbg/30">
                        {["Question", "Answer", "Actions"].map((item, index) => (
                            <th key={index} className="py-2 px-3 border">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item._id} className="text-center">
                            <td className="border border-formbg text-justify shadow-md shadow-formbg/50 p-2">{item.question.substring(0, 40)}...</td>
                            <td className="border border-formbg shadow-md shadow-formbg/50 p-2
                            items-center text-justify flex gap-1
                            ">
                                <span className="w-[21em]">{item.answer[0].substring(0, 35)}...</span>
                                <span onClick={() => {
                                    handleOnChange(item.question, item.answer);
                                    setShowMessage(!showMessage);
                                }}>
                                    {showMessage ? (
                                        <IoEyeOutline size={17} className="text-primary cursor-pointer" />
                                    ) : (
                                        <IoEyeOffOutline size={17} className="text-primary cursor-pointer" />
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
                <FaqModel
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
                showMessage && <MessageModel closedModel={setShowMessage} data={userFaq} mode="faq" />
            }
        </div>
    );
}

