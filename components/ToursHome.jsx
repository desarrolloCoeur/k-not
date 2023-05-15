import Image from "next/image";
import toursData from "../data/tours.json";
import React from "react";
import Link from "next/link";

const ToursHome = ({title}) => {
    return (
        <>
            <h2 className="text-center md:text-left">{title} </h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {toursData.tours.map((tour, i) => {
                    return (
                        <div
                            key={i}
                            className="w-10/12 mx-auto text-center md:text-left md:w-full"
                        >
                            <Image
                                src={tour.imageSlider}
                                height={300}
                                width={400}
                                alt={tour.shortDescription}
                                className="h-[350px] w-full object-cover rounded-t-xl object-center rounded-xl"
                            />
                            <div className="px-5 pb-10 text-center">
                                <h3>{tour.title}</h3>
                                <p>{tour.shortDescription}</p>
                                <div className="mb-3">
                                    <label></label>
                                </div>
                                <Link
                                    className="btn-primary"
                                    href={`/tours/${tour.slug}`}
                                >
                                    VER TOUR
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ToursHome;
