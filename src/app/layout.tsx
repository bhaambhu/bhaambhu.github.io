import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sanjay Bhaambhu",
  description: "Notes from the trenches: code, games, and the journey of life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="flex min-h-screen w-full flex-col">
          <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
