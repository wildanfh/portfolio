import React from "react";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: [
      "Developed a full-stack application using React, Node.js, and PostgreSQL.",
      "Implemented a modern design system using Tailwind CSS.",
      "Collaborated with design teams to implement a responsive and user-friendly interface.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company: "Dtech Engineering",
    period: "2022 - 2023",
    description: [
      "Developed and maintained a full-stack application using html, css, js, and php.",
      "Supported team members in debugging and troubleshooting issues.",
      "Optimized backend API performance reducing server response times.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="work">
      <div className="flex items-center gap-2 mb-6 px-2">
        <GraduationCap className="text-brand-moss w-6 h-6" />
        <h2 className="text-2xl font-bold text-brand-moss-dark">Work Experience</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-6 border border-transparent hover:border-brand-sage hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-[#131613]">{exp.title}</h3>
                <p className="text-brand-moss font-medium">{exp.company}</p>
              </div>
              <Badge variant="secondary" className="bg-brand-cream text-brand-moss-dark w-fit">
                {exp.period}
              </Badge>
            </div>
            <ul className="list-disc list-outside ml-4 mt-3 space-y-1 text-sm text-[#131613]/70">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
