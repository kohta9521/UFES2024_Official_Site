import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UFES 2024 | 新歓合同イベント",
  description:
    "4/5 六本木ヒルズにて開催決定!! 大学1年生のための合同新歓イベント UFES。最高の4年間を過ごすための最高のスタートダッシュをきれる場を提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
