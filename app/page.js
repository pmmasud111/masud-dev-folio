"use client";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { useState, useEffect } from "react";

async function getData() {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data
      .filter((item) => item?.cover_image)
      .sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
}

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getData();
      setBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {loading ? <p>Loading blogs...</p> : <Blog blogs={blogs} />}
      <ContactSection />
    </div>
  );
}
