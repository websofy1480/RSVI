import { sociaMediaBlogShearing } from "@/app/api/data";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import Toast from "./Toast";

const SocialMediaShearing = ({ title }: { title?: string }) => {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [open, setOpen] = useState(false);

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "/images/event/event-banner.png";
    const encodedUrl = encodeURIComponent(url);
    const text = encodeURIComponent(title ?? "");
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`;
        break;
      case "instagram":
        navigator.clipboard.writeText(url);
        window.open("https://www.instagram.com/", "_blank");
        setToast({ message: "Link copied! Paste it in your Instagram bio, story, or chat.", type: "success" });
        return;
      case "copy":
        navigator.clipboard.writeText(url);
        setToast({ message: "Link copied to clipboard!", type: "success" });
        return;
    }
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        className="hidden lg:flex fixed right-1 top-28 z-50 items-center gap-3"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div
          className={`flex gap-3 bg-white shadow-lg rounded-lg px-4 py-3 transition-all duration-200
          ${open ? "opacity-100  -translate-x-0" : "opacity-0 -translate-x-3 pointer-events-none"}`}
        >
          {
            sociaMediaBlogShearing?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleShare(`${item.platform}`)}
                className="hover:scale-110 transition"
              >
                {item.icon}
              </button>
            ))
          }
        </div>
        <button className="w-20 gap-2 h-6 mb-4 rounded-full border flex items-center justify-center bg-white text-primary hover:bg-learning/10">
        <span className="text-formbg">Share</span>
          <FaShareAlt size={10} />
        </button>
      </div>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-formbg/10 border-t flex justify-around py-3 z-50">
        {
          sociaMediaBlogShearing?.map((item, index) => (
            <button
              key={index}
              onClick={() => handleShare(`${item.platform}`)}
              className="text-gray-600 hover:text-blue-600 hover:scale-110 transition"
            >
              {item.icon}
            </button>
          ))
        }
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}

export default SocialMediaShearing;