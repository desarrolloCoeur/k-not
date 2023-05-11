'use client'
import Image from "next/image"
import Link from "next/link"
import { Tours } from "./sliders/Tours"
import { useState } from "react"

const Navbar = () => {

    const [isTourOpen, setTourOpen] = useState();

    const toggleTours = () => {
        setTourOpen(!isTourOpen)
    }

  return (
    <header className="w-full relative text-blue-900 ">
        <div className="flex justify-between px-2 py-2">
            <div>
                <Link href="/">

                    <Image src='/img/logo.webp' alt="Knot Fishing & Jetski Rental Logo" width={150} height={80} />
                </Link>

            </div>
            <div className="md:flex items-center gap-7 pr-5 uppercase hidden">
                <Link href='/' className="text-blue-900 hover:text-blue-950">Inicio</Link>
                <button onClick={toggleTours} className="text-blue-900 hover:text-blue-950">TOURS</button>
                <Link href='#' className="text-blue-900 hover:text-blue-950">Ubicaciones</Link>
                <Link href='/nosotros' className="text-blue-900 hover:text-blue-950">Nosotros</Link>
                <Link href='/contacto' className="text-blue-900 hover:text-blue-950">Contacto</Link>
            </div>
        </div>

        {isTourOpen && (
            <Tours />
        )

        }
    </header>

  )
}

export default Navbar