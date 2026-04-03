"use client";
import ImageUploader from "../common/ImageUploader";
import { useState } from "react";
import Label from "../form/Label";
import Tooltip from "../common/Tooltip";
import { RxCross2 } from "react-icons/rx";
import { LiaCheckCircle } from "react-icons/lia";
import { FiLoader } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { ModalProps } from "@/types/modelContext";
import { internship } from "@/types/internshipContext";

export const InternshipModel = ({ mode, onClose, onSave, initialData, loading, setLoading, showTooltip, tooltip }: ModalProps & { initialData?: internship }) => {

  const [form, setForm] = useState(
    initialData || {
      title: "",
      description: "",
      image: "",
      image_publicId: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setLoading(true);
    if (
      !form.title ||
      !form.description ||
      !form.image ||
      !form.image_publicId
    ) {
      showTooltip({message:"Please fill all fields!", type: "error"});
      setLoading(false);
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60" onClick={onClose}>
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div
        className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : "max-w-[800px]"}  max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar`} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"} Internship</h2>
          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure want to delete this internship?</p>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Title</Label>
                  <input
                    name="title"
                    placeholder="Title"
                    className="border border-formbg shadow-md shadow-formbg/50 outline-none w-full p-2 rounded"
                    value={form.title}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="w-full">
                <Label>Description</Label>
                <textarea
                  name="description"
                  value={form.description}
                  placeholder="About your internship..."
                  rows={5}
                  onChange={handleChange}
                  className="border border-formbg shadow-md shadow-formbg/50 outline-none w-full p-2 rounded resize-none "
                />
              </div>

              <Label>Internship Image</Label>
              <ImageUploader
                label="Internship Image"
                folder="internship"
                onUpload={(url, public_Id) => setForm({ ...form, image: url || "", image_publicId: public_Id || null })}
                defaultPreview={form.image}
              />
            </div>
          </>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="bg-primary text-white cursor-pointer flex items-center gap-2 px-3 py-1 rounded hover:bg-primary/20 hover:text-primary"
            onClick={onClose}
          >
            <span>Cancel</span>
            <GiCancel className="text-midnight_text" />
          </button>
          <button
            className={`${mode === "delete"
              ? "bg-error"
              : "bg-primary hover:bg-primary/20 hover:text-primary"
              } text-white px-3 py-1 flex items-center gap-2 cursor-pointer rounded hover:opacity-90`}
            onClick={handleSubmit}
          >
            <span>
              {mode === "delete" ? "Delete" : "Save"}
            </span>
            {loading ? (
              <FiLoader size={15} className="animate-spin" />
            ) : (
              <LiaCheckCircle size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}


