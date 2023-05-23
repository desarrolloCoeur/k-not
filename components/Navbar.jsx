"use client";
import Image from "next/image";
import Link from "next/link";
import { Tours } from "./sliders/Tours";
import { useState } from "react";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [isTourOpen, setTourOpen] = useState();
    const [isTourOpenMobile, setTourOpenMobile] = useState();
    const [isMenuOpen, setMenuOpen] = useState();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleTourMobile = () => {
        setTourOpenMobile(!isTourOpenMobile);
    };

    const toggleTours = () => {
        setTourOpen(!isTourOpen);
    };

    return (
        <>
            <div className="bg-blue-950 text-white">
                <div className="container mx-auto flex w-full justify-between items-center font-normal px-3">
                    <div>ENG | ESP</div>
                    <div className="flex gap-2 text-lg" >
                        <FaFacebook className="text-white"/>
                        <FaInstagram className="text-white"/>
                    </div>
                </div>
            </div>

            <header className="w-full relative text-blue-950 bg-slate-100">
                <div className="flex justify-between px-2 py-2 items-center container w-full mx-auto">
                    <div>
                        <Link href="/">
                            <Image
                                src="/img/logo-knot.webp"
                                alt="Knot Fishing & Jetski Rental Logo"
                                width={150}
                                height={80}
                            />
                        </Link>
                    </div>
                    <div className="md:flex items-center gap-7 uppercase hidden ">
                        <Link href="/">Inicio</Link>
                        <Link href="/pesca-deportiva">PESCA</Link>
                        <button onClick={toggleTours}>TOURS</button>
                        <Link href="/ubicaciones">Ubicaciones</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/contacto">Contacto</Link>
                    </div>
                    <div className="md:hidden">
                        <FaBars
                            className="text-white bg-blue-950 px-2 py-1 text-4xl mr-2 rounded-md"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="flex flex-col items-center">
                        <Link
                            href="/"
                            className="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Inicio
                        </Link>
                        <Link href="/pesca-deportiva" onClick={toggleMenu}>Pesca</Link>

                        <button
                            onClick={toggleTourMobile}
                            className="text-blue-900 hover:text-blue-950 uppercase"
                        >
                            TOURS
                        </button>
                        {isTourOpenMobile && <Tours toggleTours={toggleMenu} />}
                        <Link
                            href="/ubicaciones"
                            className="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Ubicaciones
                        </Link>
                        <Link
                            href="/nosotros"
                            className="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="/contacto"
                            className="text-blue-900 hover:text-blue-950 uppercase"
                            onClick={toggleMenu}
                        >
                            Contacto
                        </Link>
                    </div>
                )}

                {isTourOpen && <Tours toggleTours={toggleTours} />}
            </header>
        </>
    );
};

export default Navbar;
