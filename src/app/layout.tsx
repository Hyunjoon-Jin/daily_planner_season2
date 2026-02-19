import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIFE_PLANNER Season 2 | 통합 AI 관리 툴",
  description: "업무와 일상을 동시에 관리하는 똑똑한 AI 관리 툴",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
