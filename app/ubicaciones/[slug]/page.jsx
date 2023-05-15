"use client";

import Image from "next/image";
import ubicacionesData from "../../../data/ubicaciones.json";
import { useEffect, useState } from "react";
import ToursHome from "../../../components/ToursHome";

import React from "react";
import Link from "next/link";

const Ubicaciones = ({ params: { slug } }) => {
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
        <div className="container mx-auto ">
            

            <ToursHome title="Tours Disponibles" />
        </div>
    );
};

export default Ubicaciones;

export async function getStaticPaths() {
    const paths = ubicacionesData.map((ubi) => ({
        params: { slug: ubi.slug },
    }));
    return { paths, fallback: false };
}
