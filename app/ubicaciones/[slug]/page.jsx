"use client";

import Image from "next/image";
import ubicacionesData from "../../../data/ubicaciones.json";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import ToursSidebar from "@/components/ToursSidebar";

const Ubicaciones = ({ params: { slug } }) => {
    const [tour, setTour] = useState(null);

    useEffect(() => {
        getTour();
    });

    const getTour = () => {
        const tourFinded = ubicacionesData.ubicaciones.find(
            (tour) => tour.slug === slug
        );
        setTour(tourFinded);
    };

    if (!tour) {
        return (
            <div>
                <p>{slug}</p>
            </div>
        );
    }

    return (
        <>
            <Image
                src={tour.hero}
                alt={tour.title}
                width={1920}
                height={700}
                className="h-[600px] object-cover object-center"
            />
            <div className="container mx-auto w-11/12 mt-5">
                <div className="flex flex-wrap gap-5 md:flex-nowrap">
                    <div className="w-full md:w-2/3">
                        <h1>{tour.title}</h1>

                        <p>{tour.large}</p>

                        <Image
                            src={tour.image}
                            alt={tour.title}
                            width={900}
                            height={700}
                            className="object-cover w-full"
                        />
                    </div>
                    <div className="w-full md:w-2/5">
                        <ToursSidebar title="Descubre Nuevas Experiencias!"/>
                    </div>
                </div>

                {slug === "anclote" ||
                slug == "punta-mita" ||
                slug == "kupuri" ||
                slug === "sayulita" ? (
                    <div
                        className="bg-cover bg-center rounded-md h-[500px] p-5 my-10 flex items-end"
                        style={{
                            backgroundImage: `url('/img/jet-ski-11.jpg')`,
                        }}
                    >
                        <div>
                            <h2 className="text-6xl font-bold text-white bg-blue-950 p-3 rounded-md">
                                RENTA DE JETSKI!
                            </h2>
                            <div className="flex gap-3">
                                <Link
                                    href="tel:+523221351204"
                                    className="btn-primary"
                                >
                                    Reservar!
                                </Link>
                                <Link
                                    href="https://wa.me/+523221351204"
                                    className="btn-primary"
                                >
                                    Mas info!
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : null}

                {slug === "marina-vallarta" ||
                slug === "cruz-de-huanacaxtle" ||
                slug === "anclote" ? (
                    <div>
                        <h2>Nuestras Embarcaciones Disponibles!</h2>
                        <div className="container grid gap-10 md:grid-cols-3 md:gap-3">
                            <div>
                                <Image
                                    src="/img/y-knot-2.webp"
                                    alt="Hydrocat"
                                    width={500}
                                    height={500}
                                    className="h-72 object-cover"
                                />
                                <h3 className="uppercase text-3xl">Hydrocat</h3>
                                <div className="flex gap-3">
                                    <Link
                                        href="tel:+523221351204"
                                        className="btn-primary"
                                    >
                                        Reservar!
                                    </Link>
                                    <Link
                                        href="https://wa.me/+523221351204"
                                        className="btn-primary"
                                    >
                                        Mas info!
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src="/img/kokomo.webp"
                                    alt="Kokomo"
                                    width={500}
                                    height={500}
                                    className="h-72 object-cover"
                                />
                                <h3 className="uppercase text-3xl">Kokomo</h3>
                                <div className="flex gap-3">
                                    <Link
                                        href="tel:+523221351204"
                                        className="btn-primary"
                                    >
                                        Reservar!
                                    </Link>
                                    <Link
                                        href="https://wa.me/+523221351204"
                                        className="btn-primary"
                                    >
                                        Mas info!
                                    </Link>
                                </div>
                            </div>

                            {slug === "anclote" ? (
                                <div>
                                    <Image
                                        src="/img/y-knot-1.webp"
                                        alt="Y-KNOT-1"
                                        width={500}
                                        height={500}
                                        className="h-72 object-cover"
                                    />
                                    <h3 className="uppercase text-3xl">
                                        Y-KNOT I
                                    </h3>
                                    <div className="flex gap-3">
                                        <Link
                                            href="tel:+523221351204"
                                            className="btn-primary"
                                        >
                                            Reservar!
                                        </Link>
                                        <Link
                                            href="https://wa.me/+523221351204"
                                            className="btn-primary"
                                        >
                                            Mas info!
                                        </Link>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Ubicaciones;

export async function getStaticPaths() {
    const paths = ubicacionesData.map((ubi) => ({
        params: { slug: ubi.slug },
    }));
    return { paths, fallback: false };
}
