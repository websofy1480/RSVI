export type ThemeType = "default" | "dark" | "high-contrast";

export interface DataContextType {
    blogs: any[];
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    categoryCounts: Record<string, number>;
    filteredBlogs: any[]
    fontSize: number;
    setFontSize: (size: number) => void;
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
};