import React from "react";
import { Info } from "lucide-react";

export const About = () => {
  return (
    <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Info className="text-brand-moss w-6 h-6" />
        <h2 className="text-2xl font-bold text-brand-moss-dark">About Me</h2>
      </div>
      <p className="text-base sm:text-lg leading-relaxed text-[#131613]/80">
        I'm a passionate developer with a knack for creating intuitive digital experiences.
        With over 3 years of experience in full-stack development, I bridge the gap between design and engineering.
        My philosophy is simple: clean code, accessible design, and continuous learning.
        When I'm not coding, you can find me exploring new books.
      </p>
    </section>
  );
};
