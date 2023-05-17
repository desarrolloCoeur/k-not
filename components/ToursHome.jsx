import Image from "next/image";
import toursData from "../data/tours.json";
import React from "react";
import Link from "next/link";
import { FaClock,FaMoneyBill } from "react-icons/fa";

const ToursHome = ({title}) => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="">{title} </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {toursData.tours.map((tour, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-slate-100 shadow-md transition-all hover:shadow-2xl hover:scale-[1.009] rounded-md"
                        >
                            <Image
                                src={tour.imageSlider}
                                height={300}
                                width={400}
                                alt={tour.shortDescription}
                                className="h-[350px] w-full object-cover  object-center rounded-t-md"
                            />

                            <div className="px-5 pb-10 pt-2 ">
                                <h3>{tour.title}</h3>
                                <div className="flex gap-5 flex-row mb-2 -mt-1">
                                    <label className="flex flex-row items-center gap-1"><  FaClock />{tour.time}</label>
                                    <label className="flex flex-row items-center gap-1"><  FaMoneyBill />{tour.price}</label>
                                </div>
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
        </div>
    );
};

export default ToursHome;
