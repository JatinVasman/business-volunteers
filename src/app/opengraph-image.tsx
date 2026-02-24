import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Business Volunteers — Digital Marketing Agency India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Green glow accent */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,224,90,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,224,90,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            display: "flex",
            gap: "16px",
            letterSpacing: "-2px",
          }}
        >
          <span style={{ color: "#ffffff" }}>Business</span>
          <span style={{ color: "#00e05a" }}>Volunteers</span>
        </div>

        <div
          style={{
            fontSize: "26px",
            color: "#9ca3af",
            fontWeight: 500,
            letterSpacing: "4px",
            textTransform: "uppercase" as const,
          }}
        >
          Digital Marketing Agency
        </div>

        {/* Divider line */}
        <div
          style={{
            width: "120px",
            height: "3px",
            background: "linear-gradient(90deg, #00e05a, #00ff6a)",
            borderRadius: "2px",
            marginTop: "8px",
          }}
        />

        <div
          style={{
            fontSize: "18px",
            color: "#6b7280",
            fontWeight: 400,
            marginTop: "4px",
          }}
        >
          businessvolunteers.online
        </div>
      </div>
    </div>,
    { ...size },
  );
}
