import React from "react";
import { LayoutGrid, Code, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Wilcoinscreen",
    description: "a crypto currency dashboard with real-time data and analytics.",
    tags: ["React.js", "Next.js"],
    github: "https://github.com/wildanfh/wilcoinscreen",
    live: "https://wilcoinscreen.netlify.app",
  },
  {
    title: "Wildanblog",
    description: "A simple blog website with a modern design and responsive layout.",
    tags: ["React.js", "Tailwind CSS"],
    github: "https://github.com/wildanfh/wildanblog",
    live: "https://wildanfhblog.netlify.app",
  },
  {
    title: "Schloss Doner Website",
    description: "A website for a restaurant with a modern design and responsive layout.",
    tags: ["React.js", "Tailwind CSS"],
    github: "https://github.com/wildanfh/schlossdonersteglitz",
    live: "https://schlossdonersteglitz.netlify.app",
  },
  {
    title: "Movie App",
    description: "A movie app with public API and search feature.",
    tags: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/wildanfh/react-movie",
    live: "https://wildanfh-react-movie.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center gap-2 mb-6 px-2">
        <h2 className="text-2xl font-bold text-brand-moss-dark">Side Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-brand-sage hover:shadow-soft transition-all duration-300 flex flex-col"
          >
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[#131613] mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-[#131613]/70 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] font-bold px-2 py-1 bg-brand-cream text-brand-moss-dark rounded border-none"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-moss hover:text-brand-primary-dark flex items-center gap-1"
                >
                  <Code size={16} /> <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-moss hover:text-brand-primary-dark flex items-center gap-1"
                >
                  <ExternalLink size={16} /> <span>Live Demo</span>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
