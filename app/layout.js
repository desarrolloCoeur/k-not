import { Noto_Serif_Display} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const noto = Noto_Serif_Display({ weigth: '100' ,subsets: ["latin"], variable: '--font-noto' });

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
