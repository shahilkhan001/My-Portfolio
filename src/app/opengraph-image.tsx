import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.headline}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111317",
          color: "#f7f7f5",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#2457f5",
              fontSize: 25,
              fontWeight: 700,
              letterSpacing: "-0.05em",
            }}
          >
            MSK
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#a8adb6",
            }}
          >
            shahilkhan-dev.vercel.app
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 58,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.045em",
            }}
          >
            {siteConfig.name}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 34,
              lineHeight: 1.2,
              color: "#cfd3da",
            }}
          >
            {siteConfig.headline}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 22,
              color: "#8f96a3",
            }}
          >
            Web · Android · AI-enabled software
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 180,
            height: 6,
            borderRadius: 999,
            background: "#2457f5",
          }}
        />
      </div>
    ),
    size,
  );
}
