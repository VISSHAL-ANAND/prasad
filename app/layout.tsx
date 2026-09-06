import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRASAD — Move Freight Smarter",
  description: "PRASAD — logistics, transportation and consulting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}