import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR Business Showcase",
  description: "Experience the future of business presentations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
