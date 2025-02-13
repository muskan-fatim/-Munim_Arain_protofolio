'use client'
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const fetchData = async (tag: string) => {
  return client.fetch(
    `*[_type=="Project" && "${tag}" in tags]{
      title,
      description,
      "image": image.asset->url,
      tags,
    }`
  );
};

const ProjectPage = () => {
  const [projects, setProjects] = useState<{ category: string; data: any[] }[]>([]);
  const [loading, setLoading] = useState(true);
  const categories = ["LOGO", "PostsFlyers", "Thumbnails", "Banner"];

  useEffect(() => {
    const getData = async () => {
      let allProjects: any[] = [];
      for (const category of categories) {
        const data = await fetchData(category);
        allProjects = [...allProjects, { category, data }];
      }
      setProjects(allProjects);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-300 relative">
      {/* Animated Bouncing Dots */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce animation-delay-100"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
      </div>
      {/* Loading Text */}
      <p className="text-white text-lg mt-6 animate-pulse">
        Loading project...
      </p>
    </div>
    );
  }
  
  return (
    <div className="container mx-auto p-6">
      {projects.map((section) => (
        <div key={section.category} className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-6 relative">
              <span className="block">{section.category}
              </span>
              <span className="absolute w-20 h-1 bg-blue-500 rounded-lg mt-2 mx-auto left-0 right-0"></span>
            </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.data.map((project) => (
              <div
                key={project.title}
                className="shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
              >
                <div className="relative w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    width={1200}
                    height={675}
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{project.description}</p>
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
