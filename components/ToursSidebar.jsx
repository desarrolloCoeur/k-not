import Image from "next/image";
import toursData from "../data/tours.json";
import React from "react";
import Link from "next/link";
import { FaClock,FaMoneyBill } from "react-icons/fa";

const ToursSidebar = ({title}) => {
    return (
        <div className="container mx-auto my-10" id="tours">
            <h2 className="-mt-6 font-bold">{title} </h2>
            <div className="flex flex-col gap-5">
                {toursData.tours.map((tour, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-slate-100 shadow-md transition-all hover:shadow-2xl hover:scale-[1.009] rounded-md flex gap-2"
                        >
                            <Image
                                src={tour.imageSlider}
                                height={100}
                                width={200}
                                alt={tour.shortDescription}
                                className="w-1/3 object-cover  object-center rounded-l-md"
                            />

                            <div className="px-5 pb-10 pt-2 ">
                                <h3>{tour.title}</h3>
                                <p className="-mt-2 mb-2">⭐⭐⭐⭐⭐</p>
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
        </div>
    );
};

export default ToursSidebar;
