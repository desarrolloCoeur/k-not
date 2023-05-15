"use client";
import Image from "next/image";
import Link from "next/link";
import { Tours } from "./sliders/Tours";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isTourOpen, setTourOpen] = useState();
    const [isTourOpenMobile, setTourOpenMobile] = useState();
    const [isMenuOpen, setMenuOpen] = useState();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleTourMobile = () => {
        setTourOpenMobile(!isTourOpenMobile);

    }

    const toggleTours = () => {
        setTourOpen(!isTourOpen);
    };
    

    return (
        <header className="w-full relative text-blue-900 ">
            <div className="flex justify-between px-2 py-2 items-center">
                <div>
                    <Link href="/">
                        <Image
                            src="/img/logo.webp"
                            alt="Knot Fishing & Jetski Rental Logo"
                            width={150}
                            height={80}
                        />
                    </Link>
                </div>
                <div className="md:flex items-center gap-7 pr-5 uppercase hidden">
                    <Link
                        href="/"
                        className="text-blue-900 hover:text-blue-950"
                    >
                        Inicio
                    </Link>
                    <button
                        onClick={toggleTours}
                        className="text-blue-900 hover:text-blue-950"
                    >
                        TOURS
                    </button>
                    <Link
                        href="/ubicaciones"
                        className="text-blue-900 hover:text-blue-950"
                    >
                        Ubicaciones
                    </Link>
                    <Link
                        href="/nosotros"
                        className="text-blue-900 hover:text-blue-950"
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/contacto"
                        className="text-blue-900 hover:text-blue-950"
                    >
                        Contacto
                    </Link>
                </div>
                <div className="md:hidden">
                    <FaBars className="text-white bg-blue-900 px-2 py-1 text-4xl mr-2 rounded-md" onClick={toggleMenu}/>
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
    );
};

export default Navbar;
