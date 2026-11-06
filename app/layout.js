import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VeriPR",
  description: "Evidence-grounded AI code review for GitHub pull requests",
};

// The root layout wraps every page: sidebar on the left, page content on the right.
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden p-6 md:p-10">
          <div className="max-w-4xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
