import React from "react";
import { LayoutGrid, Code, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Wilcoinscreen",
    description: "A cryptocurrency dashboard with real-time data and analytics focusing on user experience and speed.",
    tags: ["React.js", "Next.js", "Tailwind"],
    github: "https://github.com/wildanfh/wilcoinscreen",
    live: "https://wilcoinscreen.netlify.app",
  },
  {
    title: "Wildanblog",
    description: "A minimalist blog platform built with modern web standards and high performance metrics.",
    tags: ["React.js", "Tailwind CSS", "Lucide"],
    github: "https://github.com/wildanfh/wildanblog",
    live: "https://wildanfhblog.netlify.app",
  },
  {
    title: "Schloss Doner Website",
    description: "A professional restaurant website featuring responsive navigation and optimized menu displays.",
    tags: ["React.js", "Tailwind CSS", "Optimization"],
    github: "https://github.com/wildanfh/schlossdonersteglitz",
    live: "https://schlossdonersteglitz.netlify.app",
  },
  {
    title: "Movie App",
    description: "Modern movie discovery application leveraging public APIs for real-time cinematic data.",
    tags: ["Next.js", "Tailwind CSS", "API"],
    github: "https://github.com/wildanfh/react-movie",
    live: "https://wildanfh-react-movie.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center gap-2 mb-6 px-2">
        <LayoutGrid className="text-brand-moss w-6 h-6" />
        <h2 className="text-2xl font-bold text-brand-moss-dark">Side Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group flex flex-col border-white/50 bg-white/40 backdrop-blur-sm hover:bg-white/60 hover:border-brand-sage hover:shadow-soft transition-all duration-300"
          >
            <CardHeader className="p-5 pb-2">
              <CardTitle className="text-lg font-bold text-[#131613]">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0 flex flex-col flex-grow">
              <p className="text-sm text-[#131613]/70 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] font-semibold px-2 py-0.5 bg-brand-cream/50 text-brand-moss-dark border-brand-sage/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-moss hover:text-brand-primary-dark inline-flex items-center gap-1.5 transition-colors"
                >
                  <Code size={14} /> <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-moss hover:text-brand-primary-dark inline-flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink size={14} /> <span>Live Demo</span>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
