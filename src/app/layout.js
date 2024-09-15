import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import TransitionProvider from "./components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tara Consulting",
  description: "Top human resources company in lagos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-header-peach`}>
        <TransitionProvider>
        {children}<Footer />
        </TransitionProvider> 
        
        </body>
    </html>
  );
}
