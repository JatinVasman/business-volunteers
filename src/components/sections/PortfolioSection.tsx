"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  { name: "Decor by Sonya Mehta", category: "Interior Design", image: "/Website/Sonya-decor.webp", link: "https://decorembysonyamehta.com/" },
  { name: "Vasoo Bamboo Arts", category: "Crafts & Artisan", image: "/Website/vasoobamboo.webp", link: "https://www.vasoobambooarts.in/" },
  { name: "Vihaara", category: "Real Estate", image: "/Website/vihara.webp", link: "https://vihaara.org/" },
  { name: "Layers Clothing", category: "Clothing", image: "/Website/layers.webp", link: "https://www.layersclothing.in/" },
  { name: "Daily Mob Design", category: "Advertising Agency", image: "/Website/dailymobdesign.webp", link: "https://dailymobdesign.com/" },
  { name: "Rahi Homes", category: "Real Estate", image: "/Website/RahiHomes.png", link: "https://rahi-homes.vercel.app/" },
];

export default function PortfolioSection({ hideHeader }: { hideHeader?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animations removed
  }, []);

  return (
    <section id={hideHeader ? undefined : "portfolio"} className={`relative ${hideHeader ? "py-4" : "py-20"} overflow-hidden ${hideHeader ? "bg-transparent" : "bg-warm"}`}>
      <div className="max-w-7xl mx-auto px-[5%] relative z-10">
        {!hideHeader && (
          <>
            <SectionHeading title="Websites We've Built" subtitle="💻 Our Work" />
            <p className="text-center text-[#666] text-base max-w-2xl mx-auto -mt-8 mb-16 font-[600]">
              Beautifully crafted websites that combine stunning design with seamless functionality. ✨
            </p>
          </>
        )}

        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card warm-card group overflow-hidden block"
              data-cursor-hover
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.image} alt={project.name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" style={{ background: "linear-gradient(135deg, #ff6b35, #ff9a00)" }}>
                  <ExternalLink size={16} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-[800] text-white group-hover:text-[#ffd700] transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="text-xs text-[#666] uppercase tracking-wider font-[700]">{project.category}</span>
                <span className="text-xs flex items-center gap-1 group-hover:underline transition-colors font-[700]" style={{ color: "#ff6b35" }}>
                  Visit Site <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
