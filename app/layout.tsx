import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brendan Herjavec - Interactive Resume",
  description: "Interactive career timeline resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
