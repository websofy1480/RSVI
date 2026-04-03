"use client";
import { DataContextType, ThemeType } from "@/types/dataContext";
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("usedata must be used within a DataProvider");
    }
    return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {

    const [blogs, setBlogs] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [fontSize, setFontSize] = useState<number>(16);
    const [theme, setTheme] = useState<ThemeType>("default");
    const [navbarOpen, setNavbarOpen] = useState(false);

    const categoryCounts = useMemo(() => {
        return blogs.reduce((acc, blog) => {
            acc[blog.category] = (acc[blog.category] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }, [blogs]);

    const filteredBlogs = useMemo(() => {
        return selectedCategory === "All"
            ? blogs
            : blogs.filter((blog) => blog.category === selectedCategory);
    }, [blogs, selectedCategory]);

    const fetchData = async () => {
        try {
            const [blogRes] = await Promise.all([fetch("/api/auth/blog")]);

            if (!blogRes.ok)
                throw new Error("Failed to fetch");

            const blogResJson = await blogRes.json();
            setBlogs(blogResJson?.data);

        } catch (error) {
            console.error("Error fetching the data records : ", error);
        }
    }

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
        localStorage.setItem("fontSize", fontSize.toString());
    }, [fontSize]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const savedFont = localStorage.getItem("fontSize");
        const savedTheme = localStorage.getItem("theme") as ThemeType | null;
        if (savedFont) setFontSize(Number(savedFont));
        if (savedTheme) setTheme(savedTheme);
        fetchData();
    }, []);

    return (
        <DataContext.Provider
            value={
                {
                    blogs,
                    selectedCategory,
                    setSelectedCategory,
                    categoryCounts,
                    filteredBlogs,
                    fontSize,
                    setFontSize,
                    theme,
                    setTheme,
                    navbarOpen,
                    setNavbarOpen
                }
            }
        >
            {children}
        </DataContext.Provider>
    );
};
