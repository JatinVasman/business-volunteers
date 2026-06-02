"use client";

import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";
import TagPill from "@/components/ui/TagPill";
import FAQAccordion from "@/components/ui/FAQAccordion";
import type { DedicatedIndustry, GenericSector, IndustryService } from "@/data/industries";

interface DedicatedProps {
  type: "dedicated";
  industry: DedicatedIndustry;
  genericSector?: never;
  services?: never;
}

interface GenericProps {
  type: "generic";
  genericSector: GenericSector;
  services: IndustryService[];
  industry?: never;
}

type IndustryDetailContentProps = DedicatedProps | GenericProps;

export default function IndustryDetailContent(props: IndustryDetailContentProps) {
  if (props.type === "generic") {
    return <GenericTemplate sector={props.genericSector} services={props.services} />;
  }
  return <DedicatedTemplate industry={props.industry} />;
}

// ─── Generic Template ─────────────────────────────────────────────────────────

function GenericTemplate({ sector, services }: { sector: GenericSector; services: IndustryService[] }) {
  return (
    <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,107,53,0.05),_transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Back */}
        <div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[0.82rem] font-[700] text-[#ff6b35] hover:gap-3 transition-all duration-300 mb-10"
            data-cursor-hover
          >
            <ArrowLeft size={16} /> All Industries
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">{sector.emoji}</div>
          <h1 className="text-4xl sm:text-5xl font-[900] text-[#1a1a2e] mb-4">
            {sector.name}{" "}
            <span className="gradient-text">Digital Marketing</span>
          </h1>
          <p className="text-[0.92rem] font-[600] text-[#888] max-w-2xl mx-auto leading-[1.7] mb-6">
            {sector.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <TagPill label="Industry Expert" color={sector.color} size="md" />
            <TagPill label="70+ Industries Served" color="#ff6b35" size="md" />
            <TagPill label="Affordable Pricing" color="#00d084" size="md" />
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6" style={{ color: "#ff6b35" }}>
            ⚡ Our Services for {sector.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="svc-card"
              >
                <h3 className="text-[0.95rem] font-[800] text-[#1a1a2e] mb-2">{svc.name}</h3>
                <p className="text-[0.82rem] font-[600] text-[#888] leading-[1.6] mb-3">
                  {svc.description}
                </p>
                <span className="text-[0.78rem] font-[800]" style={{ color: sector.color }}>
                  {svc.priceRange}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTABanner />
      </div>
    </section>
  );
}

// ─── Dedicated Template ───────────────────────────────────────────────────────

function DedicatedTemplate({ industry }: { industry: DedicatedIndustry }) {
  const c = industry.color;

  return (
    <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Back */}
        <div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[0.82rem] font-[700] text-[#ff6b35] hover:gap-3 transition-all duration-300 mb-10"
            data-cursor-hover
          >
            <ArrowLeft size={16} /> All Industries
          </Link>
        </div>

        {/* ── Hero ── */}
        <div
          className="rounded-[22px] p-8 sm:p-12 mb-16 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${c}12, ${c}06)`,
            border: `2px solid ${c}25`,
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[5px]" style={{ background: `linear-gradient(90deg, ${c}, #ff9a00)` }} />

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div
              className="text-4xl sm:text-5xl w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-[14px] sm:rounded-[18px] grid place-items-center shrink-0"
              style={{ background: `${c}20`, border: `2px solid ${c}30` }}
            >
              {industry.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-[#1a1a2e] mb-3 leading-[1.15]">
                {industry.name}{" "}
                <span className="gradient-text">Digital Marketing</span>
              </h1>
              <p className="text-[0.9rem] font-[600] text-[#888] leading-[1.7] mb-5 max-w-2xl">
                {industry.heroDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <TagPill label={`📊 Market: ${industry.marketSize}`} color={c} size="md" />
                <TagPill label={`📈 Growth: ${industry.growthRate}`} color="#00d084" size="md" />
              </div>

              {/* Shocking fact */}
              <div
                className="inline-block px-5 py-3 rounded-[14px] text-[0.82rem] font-[700]"
                style={{ background: `${c}15`, color: c, border: `1.5px solid ${c}30` }}
              >
                💡 {industry.shockingFact}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://wa.me/918586989832?text=Hi%20BV!%20I%20need%20digital%20marketing%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-cursor-hover
            >
              💬 Get Started on WhatsApp
            </a>
            <a href="/#contact" className="btn-outline" data-cursor-hover>
              📞 Book a Strategy Call
            </a>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        <div className="mb-16">
          <h2 className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6" style={{ color: "#ff6b35" }}>
            📊 Our {industry.name} Track Record
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industry.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="warm-card p-5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-[900] mb-1" style={{ color: c }}>
                  {stat.value}
                </div>
                <div className="text-[0.75rem] font-[700] text-[#888]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Market Trends ── */}
        <div className="mb-16">
          <h2 className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6" style={{ color: "#ff6b35" }}>
            📈 {industry.name} Market Trends
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {industry.marketTrends.map((trend, i) => (
              <div
                key={trend.title}
                className="warm-card p-5 flex gap-4"
              >
                <div className="text-2xl shrink-0">{trend.icon}</div>
                <div>
                  <h3 className="text-[0.88rem] font-[800] text-[#1a1a2e] mb-1">{trend.title}</h3>
                  <p className="text-[0.8rem] font-[600] text-[#888] leading-[1.6]">{trend.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Business Types ── */}
        <div className="mb-16">
          <h2 className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6" style={{ color: "#ff6b35" }}>
            🏢 {industry.name} Business Types We Serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {industry.businessTypes.map((bt) => (
              <TagPill key={bt} label={bt} color={c} size="md" />
            ))}
          </div>
        </div>

        {/* ── Services & Pricing ── */}
        <div className="mb-16">
          <h2 className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6" style={{ color: "#ff6b35" }}>
            ⚡ Our {industry.name} Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {industry.services.map((svc, i) => (
              <div
                key={svc.name}
                className="relative overflow-hidden rounded-[18px] bg-white transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_18px_45px_rgba(255,107,53,0.18)]"
                style={{ border: "2px solid rgba(0,0,0,0.08)" }}
              >
                <div className="h-[4px]" style={{ background: `linear-gradient(90deg, ${c}, #ff9a00)` }} />
                <div className="p-6">
                  <h3 className="text-[0.95rem] font-[800] text-[#1a1a2e] mb-2">{svc.name}</h3>
                  <p className="text-[0.82rem] font-[600] text-[#888] leading-[1.6] mb-3">{svc.description}</p>
                  <span className="text-[0.8rem] font-[800]" style={{ color: c }}>
                    {svc.priceRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Blog Articles ── */}
        <div className="mb-16">
          <h2 className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6" style={{ color: "#ff6b35" }}>
            📝 {industry.name} Insights & Articles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.blogArticles.map((article, i) => (
              <div key={article.slug}>
                <Link
                  href={`/industries/${industry.slug}/blog/${article.slug}`}
                  className="block group"
                  data-cursor-hover
                >
                  <div className="warm-card p-6 h-full flex flex-col">
                    <TagPill label={article.tag} color={c} />
                    <h3 className="text-[0.9rem] font-[800] text-[#1a1a2e] mt-3 mb-3 leading-[1.4] group-hover:text-[#ff6b35] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[0.78rem] font-[600] text-[#888] leading-[1.6] line-clamp-2 flex-1">
                      {article.content[0]}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[0.78rem] font-[700] mt-3 group-hover:gap-2 transition-all" style={{ color: c }}>
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQs ── */}
        <div className="mb-16">
          <h2 className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6" style={{ color: "#ff6b35" }}>
            ❓ Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={industry.faqs} color={c} />
        </div>

        {/* ── CTA ── */}
        <CTABanner industryName={industry.name} color={c} />
      </div>
    </section>
  );
}

// ─── Shared CTA Banner ────────────────────────────────────────────────────────

function CTABanner({ industryName, color }: { industryName?: string; color?: string }) {
  return (
    <div
      className="text-center p-6 sm:p-10 rounded-[22px] relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1a2e, #2d1b4e)",
        border: `2px solid ${color || "#ff6b35"}30`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[4px]"
        style={{ background: `linear-gradient(90deg, ${color || "#ff6b35"}, #ff9a00, #00d084)` }}
      />
      <h3 className="text-2xl sm:text-3xl font-[900] text-white mb-3">
        Ready to Grow Your{industryName ? ` ${industryName}` : ""} Business?
      </h3>
      <p className="text-[0.88rem] font-[600] text-[#ccc] mb-6 max-w-lg mx-auto leading-[1.7]">
        Join 2,193+ businesses that trust Business Volunteers for their digital marketing.
        Let&apos;s build your growth strategy today.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://wa.me/918586989832?text=Hi%20BV!%20I%20need%20digital%20marketing%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          data-cursor-hover
        >
          💬 WhatsApp Us
        </a>
        <a
          href="/#contact"
          className="inline-block px-[30px] py-[14px] rounded-[30px] text-[0.9rem] font-[900] transition-all duration-300 hover:translate-y-[-4px] hover:scale-[1.05]"
          style={{
            border: "2.5px solid rgba(255,255,255,0.4)",
            color: "#fff",
            background: "rgba(255,255,255,0.1)",
          }}
          data-cursor-hover
        >
          📞 Book a Strategy Call
        </a>
      </div>
    </div>
  );
}
