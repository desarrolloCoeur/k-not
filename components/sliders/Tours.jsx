"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import toursData from "../../data/tours.json";
import Image from "next/image";
import Link from "next/link";

export const Tours = ({toggleTours,toggleMenuMobile}) => {
    
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex ">
                {toursData.tours.map((tour, i) => {
                    return (
                        <div key={i} className="embla__slide flex-[0_0_90%] md:flex-[0_0_33.333333%] items-center px-2 py-1">
                            <Link href={`/tours/${tour.slug}`} className="relative" onClick={() => {toggleTours(); toggleMenuMobile()}}>
                                <Image
                                    src={tour.imageSlider}
                                    alt={tour.title}
                                    width={500}
                                    height={320}
                                    className="object-cover w-full h-full"
                                />
                                <h3 className="absolute w-3/4 bottom-0 mx-auto left-0 right-0 rounded-full  text-center bg-slate-100">{tour.title}</h3>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
