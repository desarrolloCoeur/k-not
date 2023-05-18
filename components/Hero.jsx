import Link from "next/link"

const Hero = () => {
  return (
    <div className=" bg-cover bg-[url(/img/kayak-slider.jpeg)] bg-center relative">
        <div className="container w-11/12 relative min-h-[100dvh] mx-auto"> 
          <div className=" absolute bottom-10 flex flex-col gap-1">
              <h2 className="md:text-7xl font-bold shadow-md bg-slate-50 py-1 px-2 rounded-md">kayak en el Oceano</h2>
              <Link href="#" className="btn-primary w-[170px] text-xl text-center ">RESERVE NOW</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero