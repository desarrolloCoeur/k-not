"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import toursData from "../../data/tours.json";
import Image from "next/image";
import Link from "next/link";

export const Tours = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex ">
                {toursData.tours.map((tour, i) => {
                    return (
                        <div key={i} className="embla__slide flex-[0_0_60%] md:flex-[0_0_30%] items-center px-2 py-1">
                            <Link href={`/tours/${tour.slug}`}className="relative">
                                <Image
                                    src={tour.imageSlider}
                                    alt={tour.title}
                                    width={200}
                                    height={200}
                                    className="object-cover w-full h-full"
                                />
                                <h3 className="absolute bg-white bottom-0 left-0 right-0  text-center">{tour.title}</h3>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
