import { metadata } from './metadata'; 
import Main from '../app/components/main'
import NavBar from "./components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const poppins_init = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['300', '600']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins_init.variable}`}>
        <div className="flex">
          {children}      
        </div>
             
      </body>
    </html>
  );
}
