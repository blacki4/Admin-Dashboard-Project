import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import { TeamProvider } from "../Context/TeamContext";
import { SideProvider } from "./Components/SideContext";

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
          <SideProvider>
            <div className="flex min-h-screen">
              <SideBar />
              <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main className="flex-1">{children}</main>
              </div>
            </div>
          </SideProvider>
        </TeamProvider>
      </body>
    </html>
  );
}
