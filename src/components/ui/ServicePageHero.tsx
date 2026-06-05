"use client";

interface Props {
  headline: string;
  subline: string;
  accentLine?: string;
}

export default function ServicePageHero({ headline, subline, accentLine }: Props) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a1a2e 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(255,107,53,0.4), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)",
          animation: "float 9s ease-in-out infinite reverse",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-[5%] text-center">
        <span
          className="inline-block px-5 py-2 rounded-full text-[0.72rem] tracking-[3px] uppercase font-[800] mb-6"
          style={{
            background: "rgba(255,107,53,0.15)",
            color: "#ff9a00",
            border: "1px solid rgba(255,107,53,0.3)",
          }}
        >
          Business Volunteers
        </span>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[900] leading-[1.1] tracking-[-1px] text-white mb-6"
        >
          {headline}
        </h1>

        <p
          className="text-base sm:text-lg text-[#b0b0c0] leading-relaxed max-w-3xl mx-auto font-[600] mb-4"
        >
          {subline}
        </p>

        {accentLine && (
          <p
            className="text-sm sm:text-base italic max-w-3xl mx-auto font-[600]"
            style={{ color: "#ff9a00" }}
          >
            {accentLine}
          </p>
        )}

        {/* Gradient line */}
        <div
          className="mt-8 mx-auto w-24 h-[3px] origin-center rounded-full"
          style={{ background: "linear-gradient(90deg, #ff6b35, #ff9a00, #00d084)" }}
        />
      </div>
    </section>
  );
}
