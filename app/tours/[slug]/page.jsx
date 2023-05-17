"use client";

import Image from "next/image";
import toursData from "../../../data/tours.json";
import { useEffect, useState } from "react";
import {
    FaUserAlt,
    FaClock,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMoneyBill,
    FaCalendar,
} from "react-icons/fa";
import ToursHome from "../../../components/ToursHome";
import ContactTour from "../../../components/ContactTour";

import React from "react";
import Link from "next/link";

const Tour = ({ params: { slug } }) => {
    const [tour, setTour] = useState(null);

    useEffect(() => {
        getTour();
    });

    const getTour = () => {
        const tourFinded = toursData.tours.find((tour) => tour.slug === slug);
        setTour(tourFinded);
    };

    if (!tour) {
        return (
            <div>
                <p>{slug}</p>
                Tour no encontrado{" "}
            </div>
        );
    }

    return (
        <>
            <div className="relative ">
                <Image
                    className="object-cover w-full h-[28rem] object-center"
                    width={1920}
                    height={500}
                    src={tour.imageSlider}
                    alt={tour.title}
                />
                {/* <div className="top-0 left-0 right-0 bottom-0 absolute bg-[rgba(23,37,83,0.5)]"></div>

                <div className="absolute bottom-4 left-0 right-0 mx-auto text-white text-center justify-center drop-shadow-lg max-w-[550px] z-10">
                    <p className="text-xl">{tour.shortDescription}</p>
                </div> */}
            </div>
            <div className="container mx-auto w-11/12 ">
                <div className="flex flex-col md:flex-row gap-3 relative my-10">
                    <div className="w-full md:w-2/3">
                        <div className="flex justify-between w-full flex-col sm:flex-row">
                            <div>
                                <h1>{tour.title}</h1>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 ">
                                <label className="flex flex-row gap-1 items-center">
                                    <FaClock /> {tour.time}
                                </label>
                                <label className="flex flex-row gap-1 items-center">
                                    <FaMoneyBill /> {`$ ${tour.price}`}
                                </label>
                            </div>
                        </div>
                        <p className="mt-3">{tour.description}</p>

                        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 -px-3 mt-3">
                            {tour.gallery.map((image, i) => {
                                return (
                                    <Image
                                        key={i}
                                        src={image}
                                        width={500}
                                        height={500}
                                        alt={tour.title}
                                        className="w-full h-60 object-cover"
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3" id="reservar">
                        <ContactTour />
                    </div>
                </div>

                <ToursHome title="Otros Tours" />

                <Link href="#reservar">
                    <div className="fixed bottom-3 left-3 bg-blue-900 text-white flex items-center gap-2 px-2 py-2 rounded-md md:hidden">
                        <label>RESERVAR!</label>
                        <FaCalendar />
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Tour;

export async function getStaticPaths() {
    const paths = toursData.map((tour) => ({
        params: { slug: tour.slug },
    }));
    return { paths, fallback: false };
}
