export interface BreadcrumbProps {
  pageName: string;
  pageDescription?: string;
}

export interface BreadcrumbLink {
  href: string;
  text: string;
}

export interface BreadcrumbsProps {
    links: { href: string; text: string }[];
}