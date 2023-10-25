import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-slate-100 mt-16 pt-10">
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
                        <Link href="https://fishingbooker.com/charters/view/16243" target="_blank" className="hover:scale-[1.010]">
                            <div className="bg-[#2080BF] rounded-md px-2 py-2">
                                <Image src="/img/fishing-booker.svg" alt="Fishing Booker - Y-knot Fihshing & Jetski Rental" width={120} height={100}/>
                                <p className="text-sm  font-bold text-white pb-0 uppercase">5 STARS EXPERIENCES</p>
                                <p className="pb-0">⭐⭐⭐⭐⭐</p>
                                <p className="text-sm  font-bold text-white pb-0 uppercase">Y-knot Fishing & Seadoos</p>
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 flex flex-col items-start gap-1 mb-10 pr-3">
                        <h3>Contactanos</h3>
                        <Link href="mailto:info@gofishpuntamita.com" className="flex items-center gap-3"><FaEnvelope /> info@gofishpuntamita.com</Link>
                        <Link href="https://wa.me/+523221351204" className="flex items-center gap-3 mt-2"><FaWhatsapp className="text-lg"/> WhatsApp</Link>
                        <div className="flex flex-row gap-3 items-start mt-2">
                            <FaPhone className="mt-[5px]"/>
                            <div className="flex flex-col">
                                <Link href="tel:+523221351204">+52 322 135 1204</Link>
                                <Link href="tel:+523222984295">+52 322 298 4295</Link>
                            </div>
                        </div>
               
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 flex flex-col items-start gap-1 mb-10 pr-3">
                        <h3>Acerca de</h3>
                        <div className="flex flex-col gap-1">
                            <Link href="/tours/jet-ski-rental">Rentar un Jet-ski</Link>
                            <Link href="/pesca-deportiva">Ir a Pescar</Link>
                            <Link href="/tours">Nuestros Tours</Link>
                            <Link href="/contacto">Contactanos</Link>
                            <Link href="tel:+523221351204">Tour Privado</Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 lg:w-1/4 flex flex-col items-start gap-1 mb-10 pr-3">
                        <h3>Ubicación</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.4894710822314!2d-105.51939772415429!3d20.77147678081425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421130a4780c45d%3A0xf5720f0d2870a811!2sYKnot%20Fishing%20and%20SeaDoos!5e0!3m2!1sen!2smx!4v1684347219929!5m2!1sen!2smx" width="100%" height="250"  loading="lazy" ></iframe>
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
