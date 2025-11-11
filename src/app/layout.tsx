import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/shared/layout/layout";

const geistInter = Inter({
  variable: "--font-geist-inter",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "greek-ext", "vietnamese"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761390583/original-983633d1f6de58f5d871f174ff34f057_o4jxkt.png" type="image"/>
      </head>
      <body className={``}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
