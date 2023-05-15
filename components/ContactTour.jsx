'use client'

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
    <>


    <form onSubmit={submitEmail} className="flex flex-col gap-3 sticky top-2" >
        <h3>Reservar Ahora!</h3>
        <input type="text" value={name} placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
        <input type="date" value={date} placeholder="Fecha" onChange={(e) => setDate(e.target.value)} />
        <input type="email" value={email} placeholder="Correo Electronico" onChange={(e) => setEmail(e.target.value)} />
        <input type="phone" value={phone} placeholder="Telefono" onChange={(e) => setPhone(e.target.value)} />
        <button type="submit" className="btn-primary mt-5">Enviar Correo</button>
        <button className="btn-primary" onClick={submitMessage}>Enviar WhatsApp</button>
    </form>
    
    </>
  )
}

export default ContactTour