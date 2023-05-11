import Link from "next/link"

const Hero = () => {
  return (
    <div className="min-h-[100dvh] bg-cover bg-[url(/img/kayak-slider.jpeg)] relative">
        <div className=" absolute bottom-10 left-10 flex gap-5">
            <Link href="#" className="btn-primary">RESERVE NOW</Link>
            <Link href="#" className="btn-secondary">MORE INFO</Link>
        </div>
    </div>
  )
}

export default Hero