export type SubmenuItem = {
    label: string;
    href: string;
    id?:string
  };    
  
  export type HeaderItem = {
    label: string;
    href: string;
    submenu?: SubmenuItem[];
  };