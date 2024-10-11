import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const fontHeading = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "700",
});

const fontBody = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sanjay Bhaambhu",
  description: "Notes from the trenches: code, games, and the journey of life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let websiteURL = "https://bhaambhu.com";
  if (process.env.NODE_ENV) {
    websiteURL = "http://localhost:3000";
  }
  return (
    <html lang="en" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="max-w-screen-md m-auto p-4 text-base text-sb-text">
        <header>
          <a href={websiteURL + "/"}>
            <h1 className={`my-3.5 mt-6 text-4xl font-bold font-heading text-sb-text`}>
              Sanjay Bhaambhu
            </h1>
          </a>
          <nav className={`flex justify-between font-body`}>
            <div className="flex gap-4 text-sb-link">
              <a href={websiteURL + "/"}>Home</a>
              <a href={websiteURL + "/projects/"}>Projects</a>
              <a href={websiteURL + "/posts/"}>Posts</a>
              <a href={websiteURL + "/contact/"}>Contact</a>
              {/* <a href={websiteURL + "/resume/"}>Resume</a> */}
            </div>
            <button className="" title="Toggle Dark Mode">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </nav>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="flex justify-between font-body">
          {/* Copyright Text */}
          <div>© {new Date().getFullYear()} Sanjay Bhaambhu</div>
          {/* Social Links */}
          <div className="flex gap-3">
            <div>Github</div>
            <div>RSS</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
