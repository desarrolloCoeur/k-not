import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-blue-50 mt-16 pt-10">
                <div className="container mx-auto w-11/12 flex flex-col md:flex-row flex-wrap lg:flex-nowrap">
                    <div className="md:w-1/2 lg:w-1/4 flex flex-col items-start gap-1 mb-10 pr-3">
                        <Image
                            src="/img/logo-knot.webp"
                            alt="Knot Fishing & Jetski Rental Logo"
                            width={200}
                            height={120}
                        />
                        <p>
                        Somos un grupo de personas amantes de la pesca y Punta
                        Mita es uno de los mejores lugares para eso. Tenemos
                        mucha diversión y grandes actividades para nuestros clientes.


                        </p>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 flex flex-col items-start gap-1 mb-10 pr-3">
                        <h3>Contact Us</h3>
                        <Link href="#" className="flex items-center gap-3"><FaEnvelope /> info@gofishpuntamita.com</Link>
                        <small>From USA</small>
                        <div className="flex flex-row gap-3 items-start ">
                            <FaPhone />
                            <div className="flex flex-col">
                                <Link href="#">322 298 4295</Link>
                                <Link href="#">322 298 4295</Link>
                            </div>
                        </div>
                        <small>From MX</small>
                        <div className="flex flex-row gap-3 items-start ">
                            <FaPhone />
                            <div className="flex flex-col">
                                <Link href="#">322 298 4295</Link>
                                <Link href="#">322 298 4295</Link>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 flex flex-col items-start gap-1 mb-10 pr-3">
                        <h3>Contactanos</h3>
                        <div className="flex flex-col gap-1">
                            <Link href="#">Rentar un Jet-ski</Link>
                            <Link href="#">Ir a Pescar</Link>
                            <Link href="#">Nuestros Tours</Link>
                            <Link href="#">Contactanos</Link>
                            <Link href="#">Tour Privado</Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 flex flex-col items-start gap-1 mb-10 pr-3">
                        <h3>Ubicacion</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.4894710822314!2d-105.51939772415429!3d20.77147678081425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421130a4780c45d%3A0xf5720f0d2870a811!2sYKnot%20Fishing%20and%20SeaDoos!5e0!3m2!1sen!2smx!4v1684347219929!5m2!1sen!2smx" width="100%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                

                <div className="bg-blue-950 py-1">
                    <div className="container mx-auto flex justify-between items-center">
                        <label className="text-white text-sm">
                            Y-Knot fishing & Jet-ski rentals - 2023 | Developed
                            by CoeurMkt
                        </label>
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
