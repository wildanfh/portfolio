import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const techStack = ["React", "Node.js", "TypeScript", "Tailwind", "PostgreSQL"];

export const Profile = () => {
  return (
    <section className="flex flex-col items-center text-center fade-in-up" id="home">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-tr from-brand-sage to-brand-primary rounded-full opacity-60 blur group-hover:opacity-100 transition duration-500"></div>
        <div className="relative w-32 h-40 sm:w-40 sm:h-52 rounded-lg overflow-hidden border-4 border-white shadow-sm">
          <Image
            src="/profile.jpg"
            alt="Portrait of Wildan"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#131613]">Wildanfh</h1>
        <a
          href="https://bscscan.com/address/0xed2140847f7165b0dace2a95820ab23d141927ba"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-semibold text-brand-moss hover:text-brand-moss/80"
        >
          wildanfh.usdt
        </a>
        <p className="text-lg sm:text-xl font-medium text-brand-moss">Fullstack Developer</p>
        <p className="text-brand-moss/80 max-w-md mx-auto leading-relaxed">
          Crafting elegant, user-centric web applications with modern technologies.
          Specializing in the MERN stack and creative frontend solutions.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {techStack.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="bg-brand-sage/30 border-brand-sage text-brand-moss-dark rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
};
