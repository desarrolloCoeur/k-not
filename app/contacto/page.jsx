import { FaPhone, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Contacto = () => {
  return (
    <div className="  py-24">
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-4/6 w-5/6 mx-auto">
      <div className="lg:mb-0 mb-12">
        <h4 className=" font-bold lg:text-6xl text-4xl">Enviar un mensaje.</h4>
        <div className="lg:mr-12 mr-0 mt-6">
          <input type="text" placeholder="Nombre" className="mt-3 px-3 py-3 bg-transparent border-2 shadow-sm border-blue-950 placeholder-blue-900 font-normal focus:outline-none focus:border-white  block w-full sm:text-ms " />
          <input type="email" placeholder="Email" className="mt-3 px-3 py-3 bg-transparent border-2 shadow-sm border-blue-950 placeholder-blue-900 font-normal focus:outline-none focus:border-white  block w-full sm:text-ms " />
          <input type="tel" placeholder="Telefono" className="mt-3 px-3 py-3 bg-transparent border-2 shadow-sm border-blue-950 placeholder-blue-900 font-normal focus:outline-none focus:border-white  block w-full sm:text-ms " />
          <textarea placeholder="Mensaje" className="mt-3 px-3 py-3 bg-transparent border-2 shadow-sm border-blue-950 placeholder-blue-900 font-normal focus:outline-none focus:border-white  block w-full sm:text-ms   rounded-md"></textarea>
        </div>
        <div className=" my-6 ">
          <h4>Tu Actividad</h4>
          <div className="grid lg:grid-cols-2 grid-cols-1 ml-1 font-light gap-3">
            <div>
              <input type="checkbox" className="mr-3" />Fishing Trip <br />
              <input type="checkbox" className="mr-3" />Whale Watching<br />
              <input type="checkbox" className="mr-3" />Snorkeling and Scuba Diving<br />
              <input type="checkbox" className="mr-3" />Surf spot transport<br />
            </div>
            <div>
              <input type="checkbox" className="mr-3" />Coastline Cruise<br />
              <input type="checkbox" className="mr-3" />Jet Ski rental<br />
              <input type="checkbox" className="mr-3" />Special Destination Trip<br />
            </div>
          </div>
          <div>
            <button type="submit" className="btn-primary mt-5 block w-24 sm:text-ms ">Enviar</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 rounded-md">
        <div className="mx-12 ">
          <h4 className="font-bold lg:text-xl text-lg mt-12 mb-8 lg:text-left text-center">Si tienes alguna duda o quieres realizar tu reserva envíanos un mensaje y en menos de 24hrs estaremos en contacto.</h4>
          <div className="flex">
            <div className="mx-0">
              <div className="mb-3">
                <p className="mx-0 mb-1 ">Desde EE. UU. y Canadá</p>
                <div className='flex items-center gap-3'>
                  <FaPhone/>
                  <p className='mb-0 pb-0'>011-521-322-135-1204</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="mx-0 mb-1">Home</p>
                <div className='flex items-center gap-3'>
                  <FaPhone/>
                  <p className='mb-0 pb-0'>011-52-329-298-4295</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="mx-0 mb-1">Desde México</p>
                <div className='flex items-center gap-3'>
                  <FaPhone/>
                  <p className='mb-0 pb-0'>(322)-135-1204 or 329-298-4295</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope />
                <p className="text-[#f04444] mb-0 pb-0">info@gofishpuntamita.com</p>
          </div>
          <h4 className="font-bold lg:text-2xl text-xl mt-10 mb-6">Síguenos</h4>
          <div className="flex pb-12 items-center gap-5 text-xl">
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Contacto