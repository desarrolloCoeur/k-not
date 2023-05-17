import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-blue-100 mt-16">
                <div className="container mx-auto flex">
                    <div className="w-1/4 flex flex-col items-start gap-5 pt-10 pb-5">
                        <Image
                            src="/img/logo-knot.webp"
                            alt="Knot Fishing & Jetski Rental Logo"
                            width={200}
                            height={120}
                        />
                        <p>We are a group of people who love fishing and Punta Mita is one of the best places for that. We have many fun and great activities for our clients.</p>
                    </div>
                    <div className="w-1/4 flex flex-col items-start gap-5 pt-10 pb-5">
                        <h3>Contact Us</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    
                </div>
                
                <div className="bg-blue-950 py-1">
                    <div className="container mx-auto flex justify-between items-center">
                        <label className="text-white text-sm">Y-Knot fishing & Jet-ski rentals - 2023 | Developed by CoeurMkt</label>
                        <Image
                            src="/img/visamastercard.gif"
                            alt="Visa & Mastercard"
                            width={80}
                            height={50}
                            />
                    </div>

                </div>
            </footer>

        </>
    );
};

export default Footer;
