import { TooltipProps } from "@/app/admin/components/common/Tooltip";
import { successStory } from "./successStoryContext";
import { internship } from "./internshipContext";
import { initiatives } from "./initiativesContext";
import { faq } from "./faqContext";

export type Mode = "create" | "edit" | "delete";
export type Form = successStory | internship | initiatives | faq

export interface ModalProps {
    mode: Mode;
    onClose: () => void;
    onSave: (form: Form) => Promise<void> | void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    showTooltip: (params: TooltipProps) => void;
    tooltip: TooltipProps | null;
}