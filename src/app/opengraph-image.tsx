import { ImageResponse } from "next/og";

export const alt = "Nhat Nguyen — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #060a14 0%, #0d1526 100%)",
          color: "#e7edf7",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* blue glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0) 70%)",
          }}
        />

        <div style={{ display: "flex", fontSize: 32, color: "#60a5fa" }}>
          &lt;Nhat Nguyen /&gt;
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, lineHeight: 1.05 }}>
            Nhat Nguyen
          </div>
          <div style={{ display: "flex", fontSize: 52, color: "#93a3be", marginTop: 12 }}>
            Backend Developer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#93a3be",
              marginTop: 28,
              maxWidth: "860px",
            }}
          >
            Building scalable, high-performance backend systems with Java &amp; Spring Boot.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#93a3be",
          }}
        >
          <div style={{ display: "flex", color: "#60a5fa" }}>nhatnguyenhuynh.com</div>
          <div style={{ display: "flex" }}>Java · Spring Boot · PostgreSQL · Redis</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
