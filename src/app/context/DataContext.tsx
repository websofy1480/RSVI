"use client";
import { DataContextType } from "@/types/dataContext";
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { dynamicTheme } from "../api/data";

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
    const [color, setColor] = useState("default");
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
        document.documentElement.classList.remove(
            ...dynamicTheme.map(t => `theme-${t.value}`)
        );

        localStorage.removeItem("color-theme");
        setColor("default");
        fetchData();
    }, []);


    const changeColor = (newColor: string) => {
        const themes = ["default", "red", "green", "blue", "dark"];

        document.documentElement.classList.remove(
            ...themes.map(t => `theme-${t}`)
        );

        if (newColor !== "default") {
            document.documentElement.classList.add(`theme-${newColor}`);
        }
        localStorage.setItem("color-theme", newColor);
        setColor(newColor);
    };

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
                    color,
                    changeColor,
                    navbarOpen,
                    setNavbarOpen
                }
            }
        >
            {children}
        </DataContext.Provider>
    );
};
