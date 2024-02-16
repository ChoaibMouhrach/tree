import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "Choaib Mouhrach | Link Tree",
  description: "Discover the branches of Choaib Mouhrach's link connections and experiences.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

export default RootLayout
