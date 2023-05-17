import { Libre_Franklin} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const libreFranklin = Libre_Franklin({ weigth: '100' ,subsets: ["latin"], variable: '--font-franklin' });

export const metadata = {
    title: "Y-Knot | Tours and Jetski Rental in Punta Mita & Sayulita",
    description: "Tours and Jetski Rental in Punta Mita & Sayulita",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
