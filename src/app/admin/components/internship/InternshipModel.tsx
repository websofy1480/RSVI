"use client";
import ImageUploader from "../common/ImageUploader";
import { useState } from "react";
import Label from "../form/Label";
import Tooltip from "../common/Tooltip";
import { RxCross2 } from "react-icons/rx";
import { LiaCheckCircle } from "react-icons/lia";
import { FiLoader } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function InternshipModel({ mode, onClose, onSave, initialData }: any) {
  const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(
    initialData || {
      title: "",
      description: "",
      image: "",
      image_publicId: "",
    }
  );

  const showTooltip = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setLoading(true);
    if (
      !form.title ||
      !form.description ||
      !form.image ||
      !form.image_publicId
    ) {
      showTooltip("Please fill all fields!", "error");
      setLoading(false);
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60" onClick={onClose}>
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div
        className="bg-white p-6 rounded-lg w-[95%] max-w-[800px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
      >
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


