import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Mosaic Motion",
  description: "사진을 조각내어 다음 장면으로 전환하는 모바일 포토 모션 앱",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
