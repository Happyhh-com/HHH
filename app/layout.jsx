import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata = {
  title: "My Next.js App",
  description: "App using shared layout with Header",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
