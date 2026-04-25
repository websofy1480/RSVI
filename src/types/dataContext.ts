export type ThemeType = "default" | "dark" | "red" | "green" | "blue";

export interface DataContextType {
    blogs: any[];
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    categoryCounts: Record<string, number>;
    filteredBlogs: any[]
    fontSize: number;
    setFontSize: (size: number) => void;
    color: any;
    changeColor: (theme: string) => void;
    navbarOpen: boolean,
    setNavbarOpen: (flag: boolean) => void
};