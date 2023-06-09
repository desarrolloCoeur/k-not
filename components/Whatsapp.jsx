import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <Link href="https://wa.me/+523221351204" target='_blank'>
        <div className='bg-blue-950 text-white text-base fixed bottom-3 right-[4%] z-10 flex flex-row items-center p-2 rounded-md gap-1 uppercase font-semibold'>
            <FaWhatsapp className='text-white text-2xl'/> Enviar WhatsApp
        </div>
    </Link>
  )
}

export default Whatsapp