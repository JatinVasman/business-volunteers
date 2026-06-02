"use client";

export default function Ticker() {
  const items = [
    "🎉 2,193+ Happy Clients",
    "🚀 70+ Industries Served",
    "⭐ 4.9★ Google Rating",
    "🇮🇳 Pan-India Agency",
    "📍 Noida Sec 62, Delhi NCR",
    "💬 +91 85869 89832",
    "✨ Affordable Excellence Since Day 1",
    "📈 500+ Business Types Helped",
  ];

  return (
    <div
      className="w-full py-[10px] overflow-hidden whitespace-nowrap"
      style={{
        background:
          "linear-gradient(90deg, #ff6b35, #ff9a00, #00d084, #00c9ff, #8b5cf6, #ff4da6)",
      }}
    >
      <div className="inline-block animate-ticker">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-white font-[800] text-[0.82rem] mx-[30px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
