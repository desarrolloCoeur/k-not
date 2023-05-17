import Link from "next/link"

const Hero = () => {
  return (
    <div className=" bg-cover bg-[url(/img/kayak-slider.jpeg)] relative">
        <div className="container w-11/12 relative min-h-[100dvh] mx-auto"> 
          <div className=" absolute bottom-10 flex gap-5">
              <Link href="#" className="btn-primary">RESERVE NOW</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero