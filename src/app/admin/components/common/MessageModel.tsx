"use client";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MessageModel({ closedModel, data, mode }: any) {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60"
      onClick={() => closedModel(false)}
    >
      {
        (mode === "contact" || mode === "join-request" || mode === "collab") &&
        <div
          className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{mode === "contact" ? data.studentName : data.name}</h2>
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
            >
              <RxCross2 size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {
              mode === "collab" && 
              <div className="relative  h-48 rounded-md overflow-hidden shadow-xl transition duration-500 group-hover:scale-110">
                <Image
                  src={data.image}
                  alt={`Image of ${data.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            }
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex gap-6">
                <h3 className="font-semibold w-32">Phone :</h3>
                <p className="text-primary">{data.phone}</p>
              </div>
              <div className="w-full flex gap-6 ">
                <h3 className="font-semibold w-32">{mode === "contact" || mode === "collab" ? "Email" : "Department"} :</h3>
                <p className="text-primary">{mode === "contact" || mode === "collab" ? data.email : data.department}</p>
              </div>
              {
                mode === "collab" &&
                <>
                  <div className="w-full flex gap-6">
                    <h3 className="font-semibold w-32">Collaboration Type :</h3>
                    <p className="text-primary">{data.collaborationsType}</p>
                  </div>
                  <div className="w-full flex gap-6">
                    <h3 className="font-semibold w-32">Verified :</h3>
                    <p className="text-primary">{data.isVerified ? "Yes ✅" : "No ❌"}</p>
                  </div>
                </>
              }
              <div className="w-full flex gap-6 ">
                <h3 className="font-semibold w-32">Date :</h3>
                <p className="text-primary">{data.date}</p>
              </div>
              <div className="w-full flex  gap-6">
                <h3 className="font-semibold w-32">Message :</h3>
                <p className="w-96 text-primary text-justify">{data.message}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6 h-8
          ">
            <button
              className="bg-primary/20 cursor-pointer px-3 py-1 rounded text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 "
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }
      {
        mode === "blog" &&
        <div
          className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Blog Description</h2>
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
            >
              <RxCross2 size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex  gap-6">
                <h3 className="font-semibold w-32">Description :</h3>
                <p className="w-96 text-justify">{data}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6 h-8
          ">
            <button
              className="bg-primary/20 cursor-pointer px-3 py-1 rounded text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 "
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }

      {
        mode === "faq" &&
        <div
          className="bg-white p-6 rounded-lg w-[100%] max-w-[800px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
            >
              <RxCross2 size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex  gap-6">
                <h3 className="font-semibold w-20">Question :</h3>
                <p className="text-primary">{data.question}</p>
              </div>
              <div className="w-full flex  gap-6">
                <h3 className="font-semibold w-20">Answer :</h3>

                <ul className="list-disc pl-5 w-full text-secondary text-justify space-y-2">
                  {data.answer.map((ans: string, i: number) => (
                    <li key={i}>{ans}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6 h-8
          ">
            <button
              className="bg-primary/20 cursor-pointer px-3 py-1 rounded text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 "
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }

      {
        (mode === "internship" || mode === "perks" || mode === "activities" || mode === "initiatives" || mode === "success-story" || mode === "awards") &&
        <div
          className="bg-white p-6 rounded-lg w-[95%] max-w-[600px] max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar" onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{mode === "internship" ? "Internship" : mode === "perks" ? "Perks" : mode === "activities" ? "Activities" : mode === "initiatives" ? "Initiatives" : mode === "success-story" ? "Success Story" : "Award"} Description</h2>
            <button
              onClick={() => closedModel(false)}
              className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
            >
              <RxCross2 size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-full flex  gap-6">
                <h3 className="font-semibold w-28">Description :</h3>
                <p className="w-96 text-primary text-justify">{data}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6 h-8
          ">
            <button
              className="bg-primary/20 cursor-pointer px-3 py-1 rounded text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 "
              onClick={() => closedModel(false)}
            >
              Close
            </button>
          </div>
        </div>
      }

    </div>
  );
}

