import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import { TeamProvider } from "../Context/TeamContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DaM Board Dashboard",
  description: "Modern responsive dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TeamProvider>
          <div className="flex flex-col md:flex-row min-h-screen">
            <SideBar />
            <div className="flex-1 flex flex-col min-w-0">
              <Header />
              <main className="flex-1 overflow-auto p-4 md:p-6">
                {children}
              </main>
            </div>
          </div>
        </TeamProvider>
      </body>
    </html>
  );
}
