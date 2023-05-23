import Image from "next/image";
import React from "react";

const Nosotros = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-3 container w-11/12 mx-auto mt-20">
            <div className="lg:text-justify leading-loose">
                <h1>NOSOTROS</h1>

                <p className="lg:mt-8 mt-3 text-lg">
                    Somos un grupo de personas amantes de la pesca y Punta Mita
                    es uno de los mejores lugares para eso. Tenemos muchas
                    actividades divertidas y geniales para nuestros clientes.{" "}
                    <br />
                    <br />
                    Ven y acompáñanos en nuestra amplia y apasionante variedad
                    de tours de aventura, diseñados especialmente para ti, y
                    vive momentos inolvidables. Explora las experiencias más
                    emocionantes que Puerto Vallarta tiene para ofrecer con
                    nuestras exclusivas y distintivas excursiones.
                </p>
            </div>
            <div className="max-w-2xl mb-6 pt-3 lg:pt-0">
                <Image
                    src="/img/yknot.webp"
                    className="w-full h-auto object-cover"
                    width={500}
                    height={500}
                    alt="about k-not fishing"
                />
            </div>
        </div>
    );
};

export default Nosotros;
