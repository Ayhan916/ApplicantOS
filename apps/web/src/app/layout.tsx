import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApplicantOS",
  description: "Enterprise AI-powered Career Operating System.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
