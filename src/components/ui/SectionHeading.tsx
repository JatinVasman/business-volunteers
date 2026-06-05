"use client";

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-10 sm:mb-16">
      <span
        className="text-[0.72rem] tracking-[3px] uppercase font-[800] mb-3 block"
        style={{ color: "#ff6b35" }}
      >
        {subtitle}
      </span>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[900] leading-[1.15] tracking-[-1px]"
        style={{ color: "#1a1a2e" }}
      >
        {title}
      </h2>
      <div
        className="mt-5 mx-auto w-20 h-[3px] origin-center rounded-full"
        style={{ background: "linear-gradient(90deg, #ff6b35, #ff9a00, #00d084)" }}
      />
    </div>
  );
}
