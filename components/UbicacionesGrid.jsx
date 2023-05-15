import Image from "next/image";
import ubicacionesData from "../data/ubicaciones.json";
import React from "react";
import Link from "next/link";

const ToursHome = ({title}) => {
    return (
        <>
            <h2 className="text-center md:text-left">{title} </h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {ubicacionesData.ubicaciones.map((ubi, i) => {
                    return (
                        <div
                            key={i}
                            className="w-10/12 mx-auto text-center md:text-left md:w-full"
                        >
                            <Image
                                src={ubi.image}
                                height={300}
                                width={400}
                                alt={ubi.description}
                                className="h-[350px] w-full object-cover rounded-t-xl object-center rounded-xl"
                            />
                            <div className="px-5 pb-10 text-center">
                                <h3>{ubi.title}</h3>
                                <p>{ubi.description}</p>
                                <div className="mb-3">
                                    <label></label>
                                </div>
                                <Link
                                    className="btn-primary"
                                    href={`/ubicaciones/${ubi.slug}`}
                                >
                                    VER MAS!
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
