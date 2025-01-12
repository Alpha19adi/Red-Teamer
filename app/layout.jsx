import localFont from "next/font/local";
import "./globals.css";
import Cursor from "./components/Cursor";
import CustomCursor from "./components/Cursor";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Red Teamer",
  description: "Cyber Security Expert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:hidden lg:block">
        <CustomCursor />
        </div>
        {children}
      </body>
    </html>
  );
}
