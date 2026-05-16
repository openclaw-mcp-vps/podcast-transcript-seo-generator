import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PodcastSEO – Turn Podcast Transcripts into SEO Blog Posts",
  description: "Convert podcast transcripts into SEO-optimized blog posts with AI. Extract key quotes, generate meta descriptions, and grow your organic traffic."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ae64a297-1541-4492-bcc4-a924915c4357"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
