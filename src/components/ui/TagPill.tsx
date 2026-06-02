interface TagPillProps {
  label: string;
  color?: string;
  size?: "sm" | "md";
}

export default function TagPill({ label, color = "#ff6b35", size = "sm" }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center font-[700] rounded-[20px] ${
        size === "sm"
          ? "text-[0.7rem] px-[10px] py-[3px]"
          : "text-[0.78rem] px-[14px] py-[5px]"
      }`}
      style={{
        background: `${color}18`,
        border: `1.5px solid ${color}30`,
        color: color,
      }}
    >
      {label}
    </span>
  );
}
