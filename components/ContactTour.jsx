'use client'

import Link from "next/link";
import { useState } from "react"


const ContactTour = () => {
    const [name,setName] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const submitEmail = (e) => {
        e.preventDefault();
    }

    const submitMessage = (e) => {
        e.preventDefault
    }

  return (
    <div className="bg-slate-100 px-3 py-5 sticky top-2 rounded-md">


    <form onSubmit={submitEmail} className="flex flex-col gap-3 " >
        <h3>Reservar Ahora!</h3>
        <input type="text" value={name} placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
        <input type="date" value={date} placeholder="Fecha" onChange={(e) => setDate(e.target.value)} />
        <input type="email" value={email} placeholder="Correo Electronico" onChange={(e) => setEmail(e.target.value)} />
        <input type="phone" value={phone} placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} />
        <button type="submit" className="btn-primary mt-5">Enviar Correo</button>
        <Link className="btn-primary text-center" href="https://wa.me/+523221351204" target="_blank">Enviar WhatsApp</Link>
    </form>
    
    </div>
  )
}

export default ContactTour