import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plex.className}>{children}</body>
    </html>
  );
}
