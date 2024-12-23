import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/layout/Layout";
import "react-toastify/dist/ReactToastify.css";

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
  title: "داروخانه همراه",
  description: "تخصص با ما اعتماد از شما",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        dir="rtl"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
