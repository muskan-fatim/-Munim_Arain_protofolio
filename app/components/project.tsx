"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const fetchData = async (tag: string) => {
  return client.fetch(
    `*[_type=="Project" && "${tag}" in tags]{
      title,
      "image": image.asset->url
    }`
  );
};

const ProjectPage = () => {
  const [projects, setProjects] = useState<{ category: string; data: any[] }[]>([]);
  const [loading, setLoading] = useState(true);
  const categories = ["LOGO", "PostsFlyers", "Thumbnails", "Banner"];

  useEffect(() => {
    const getData = async () => {
      const allProjects = await Promise.all(
        categories.map(async (category) => {
          const data = await fetchData(category);
          return { category, data };
        })
      );

      setProjects(allProjects.filter((section) => section.data.length > 0));
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-300">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
        </div>
        <p className="text-white text-lg mt-6 animate-pulse">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {projects.map((section) => (
        <div key={section.category} className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6 relative">
            <span className="block">{section.category}</span>
            <span className="absolute w-20 h-1 bg-blue-500 rounded-lg mt-2 mx-auto left-0 right-0"></span>
          </h3>

          {/* Adjust layout for all categories */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
              section.category === "Banner" ? "grid-cols-1" : ""
            }`}
          >
            {section.data.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <div
                  className={`w-full h-auto relative ${
                    section.category === "Banner" ? "aspect-[16/9]" : "aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
