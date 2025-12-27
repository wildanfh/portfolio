import React from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "wildanf2005@gmail.com",
    href: "mailto:wildanf2005@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/wildanfh",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/wildanfh",
    icon: Linkedin,
  },
];

export const Connect = () => {
  return (
    <section className="flex flex-col items-center" id="connect">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="text-brand-moss w-6 h-6" />
        <h2 className="text-2xl font-bold text-brand-moss-dark">Let's Connect</h2>
      </div>
      <div className="w-full max-w-md grid grid-cols-1 gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-white border border-transparent rounded-lg hover:border-brand-sage hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="bg-brand-cream p-2 rounded-md group-hover:bg-brand-sage transition-colors">
                <link.icon className="text-brand-moss-dark w-5 h-5" />
              </div>
              <span className="font-medium text-[#131613]">{link.name}</span>
            </div>
            <ArrowUpRight className="text-gray-300 group-hover:text-brand-moss transition-colors w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
};
