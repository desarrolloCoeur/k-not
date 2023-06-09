'use client'
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import heroData from "../data/hero.json"


const Hero = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true });




    return (
        <>       
         <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex ">
            {heroData.tours.map((t, i) => {
                const divStyle = {
                    backgroundImage: `url(${t.imageSlider})`,
                };
                return (
                    <div
                        key={i}
                        className="bg-cover bg-center relative embla__slide flex-[0_0_100%]"
                        style={divStyle}
                    >
                        <div className="container w-11/12 relative min-h-[90dvh] mx-auto">
                            <div className=" absolute bottom-10 flex items-center sm:items-start flex-col gap-1 mx-auto left-0 right-0">
                                <h2 className="md:text-6xl font-bold shadow-md bg-slate-50 py-1 px-2 rounded-md text-center">
                                    {t.title}
                                </h2>
                                <Link
                                    href={`/tours/${t.slug}`}
                                    className="btn-primary w-fit text-xl text-center "
                                >
                                    RESERVAR AHORA!
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}

            </div>
            </div>
        </>
    );
};

export default Hero;
