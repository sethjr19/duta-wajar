import { metadata } from './metadata'; 
import Main from '../app/components/main'
import NavBar from "./components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { poppins } from './fonts';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="flex">
          {children}      
        </div>
             
      </body>
    </html>
  );
}
