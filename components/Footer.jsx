import Image from "next/image"
import Link from "next/link"
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-col items-center gap-5 pt-10">
            <Image src="/img/logo.webp" alt="Knot Fishing & Jetski Rental Logo" width={200} height={120}/>
            <div className="flex gap-5 text-2xl">
                <Link href="#"> <FaFacebook/></Link>
                <Link href="#"> <FaInstagram /></Link>

            </div>
            <Image src="/img/visamastercard.gif" alt="Visa & Mastercard" width={120} height={80}/>

            <label className="bg-blue-900 w-full text-white text-center mt-5 py-1">Copyright © 2023 GoFishPuntamita | Made by CoeurMkt</label>
        </div>
    </footer>
  )
}

export default Footer