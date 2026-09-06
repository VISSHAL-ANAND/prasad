import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "CONVOY — Move Freight Smarter", description: "A modern logistics website." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}