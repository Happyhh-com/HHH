import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ModalProvider";
import { PanelProvider } from "@/components/PanelProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Happy Healthy Hospitals",
  description: "App using shared layout with Header",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen flex flex-col">
        <ModalProvider>
          <PanelProvider>
            <Header />

            {/* MAIN CONTENT */}
            <main className="flex-1">{children}</main>

            <Footer />
          </PanelProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
