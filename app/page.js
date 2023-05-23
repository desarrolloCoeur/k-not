import Hero from "@/components/Hero";
import ToursHome from "@/components/ToursHome";
import Image from "next/image";
import Link from "next/link";
import LatestBlogs from "@/components/LatestBlogs";
import Reviews from "@/components/Reviews";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="container mx-auto w-11/12">
                <h1 className=" text-center mt-20 mb-16">
                    ¿A dónde quieres ir?
                </h1>
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 my-20 ">
                    <div className=" w-full h-[300px] md:w-1/3 bg-cover bg-[url(/img/fishing-home.jpeg)] flex justify-center items-end pb-5 bg-center rounded-xl transition-all hover:scale-[1.009]">
                        <Link href="/pesca-deportiva" className="btn-primary">
                            IR A PESCAR!
                        </Link>
                    </div>

                    <div className=" w-full h-[300px] md:w-1/3 bg-cover bg-[url(/img/jet-ski-home.jpg)] flex justify-center items-end pb-5 bg-center rounded-xl transition-all hover:scale-[1.009]">
                        <Link href="/tours/jet-ski-rental" className="btn-primary">
                            RENTAR JETSKIS!
                        </Link>
                    </div>

                    <div className=" w-full h-[300px] md:w-1/3 bg-cover bg-[url(/img/tours-home.jpg)] flex justify-center items-end pb-5 bg-center rounded-xl transition-all hover:scale-[1.009]">
                        <Link href="#tours" className="btn-primary">
                            VER TOURS!
                        </Link>
                    </div>
                </div>

                <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-3 container my-20 items-start">
                    <div class="lg:text-justify leading-loose">
                        <h2>NOSOTROS</h2>

                        <p class=" text-lg">
                            Somos un grupo de personas amantes de la pesca y
                            Punta Mita es uno de los mejores lugares para eso.
                            Tenemos muchas actividades divertidas y geniales
                            para nuestros clientes. <br />
                            <br />
                            Ven y acompáñanos en nuestra amplia y apasionante
                            variedad de tours de aventura, diseñados
                            especialmente para ti, y vive momentos inolvidables.
                            Explora las experiencias más emocionantes que Puerto
                            Vallarta tiene para ofrecer con nuestras exclusivas
                            y distintivas excursiones.
                        </p>
                    </div>
                    <div class="max-w-2xl mb-6 pt-3 lg:pt-0">
                        <Image
                            src="/img/yknot.webp"
                            className="w-full h-auto object-cover"
                            width={500}
                            height={500}
                            alt="about k-not fishing"
                        />
                    </div>
                </div>

                <ToursHome title="Nuestros Tours" />

                <Reviews />
                <LatestBlogs />
            </div>
        </>
    );
}
