import { BreadcrumbLink } from "./breadcrumb";

export interface HeroSubProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    breadcrumbLinks: BreadcrumbLink[];
}