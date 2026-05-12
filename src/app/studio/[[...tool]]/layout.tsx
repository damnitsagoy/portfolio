import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Studio",
  description: "Content management for the portfolio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="sanity-studio"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      {children}
    </div>
  );
}
