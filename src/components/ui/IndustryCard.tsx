"use client";

import Link from "next/link";
import TagPill from "@/components/ui/TagPill";

interface IndustryCardProps {
  name: string;
  icon: string;
  color: string;
  slug: string;
  description?: string;
  variant?: "dedicated" | "generic";
  marketSize?: string;
  growthRate?: string;
  index?: number;
}

export default function IndustryCard({
  name,
  icon,
  color,
  slug,
  description,
  variant = "generic",
  marketSize,
  growthRate,
  index = 0,
}: IndustryCardProps) {
  if (variant === "dedicated") {
    return (
      <div>
        <Link href={`/industries/${slug}`} className="block group" data-cursor-hover>
          <div
            className="relative p-5 sm:p-8 rounded-[22px] overflow-hidden transition-all duration-400 group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_50px_rgba(255,107,53,0.2)]"
            style={{
              background: "#ffffff",
              border: "2px solid rgba(0,0,0,0.08)",
            }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[5px]"
              style={{ background: `linear-gradient(90deg, ${color}, #ff9a00)` }}
            />

            {/* Full Page badge */}
            <div className="absolute top-5 right-5">
              <span
                className="text-[0.65rem] font-[800] tracking-[1px] uppercase px-3 py-1 rounded-full text-white"
                style={{ background: `linear-gradient(135deg, ${color}, #ff9a00)` }}
              >
                Full Page
              </span>
            </div>

            <div className="flex items-start gap-3 sm:gap-5">
              <div
                className="text-3xl sm:text-4xl w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] rounded-[12px] sm:rounded-[16px] grid place-items-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
                style={{ background: `${color}15`, border: `2px solid ${color}25` }}
              >
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[1.3rem] font-[900] text-[#1a1a2e] mb-2 group-hover:text-[#ff6b35] transition-colors">
                  {name}
                </h3>
                {description && (
                  <p className="text-[0.82rem] font-[600] text-[#888] leading-[1.6] mb-4 line-clamp-2">
                    {description}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-2">
                  {marketSize && <TagPill label={`📊 ${marketSize}`} color={color} />}
                  {growthRate && <TagPill label={`📈 ${growthRate}`} color="#00d084" />}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-[0.8rem] font-[800] group-hover:gap-3 transition-all duration-300" style={{ color }}>
              Explore Industry
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Generic (small) card
  return (
    <div>
      <Link href={`/industries/${slug}`} className="block group" data-cursor-hover>
        <div
          className="relative p-5 rounded-[16px] text-center transition-all duration-300 group-hover:translate-y-[-6px] group-hover:shadow-[0_15px_35px_rgba(255,107,53,0.15)]"
          style={{
            background: "#ffffff",
            border: "2px solid rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px]"
            style={{ background: `linear-gradient(90deg, ${color}, ${color}60)` }}
          />
          <div className="text-2xl mb-2">{icon}</div>
          <h4 className="text-[0.78rem] font-[800] text-[#1a1a2e] group-hover:text-[#ff6b35] transition-colors leading-[1.3]">
            {name}
          </h4>
        </div>
      </Link>
    </div>
  );
}
