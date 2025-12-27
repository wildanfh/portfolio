"use client";

import React from "react";
import { User, Briefcase, Rocket, Mail } from "lucide-react";

const navItems = [
  { name: "Profile", href: "#home", icon: User },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Rocket },
  { name: "Connect", href: "#connect", icon: Mail },
];

export const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/80 backdrop-blur-md border border-white/40 shadow-soft rounded-full px-6 py-3 flex items-center gap-6 md:gap-8 transition-all duration-300 hover:bg-white/90 shadow-lg">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex items-center gap-2 text-brand-moss hover:text-brand-primary-dark transition-colors"
          >
            <item.icon size={20} className="group-hover:fill-current" />
            <span className="hidden sm:block text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
