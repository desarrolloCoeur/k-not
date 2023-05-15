import Hero from "@/components/Hero";
import ToursHome  from "@/components/ToursHome";
import Image from "next/image";
import Link from "next/link";
import LatestBlogs from "@/components/LatestBlogs";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 my-10 container mx-auto">

                <div className=" w-10/12 h-[300px] md:w-1/3 bg-cover bg-[url(/img/fishing-home.jpeg)] flex justify-center items-end pb-5 bg-center rounded-xl" >
                    <Link href="#" className="btn-primary">IR A PESCAR!</Link>
                </div>

                <div className=" w-10/12 h-[300px] md:w-1/3 bg-cover bg-[url(/img/jet-ski-home.jpg)] flex justify-center items-end pb-5 bg-center rounded-xl">
                    <Link href="#" className="btn-primary">RENTAR JETSKIS!</Link>
                </div>

                <div className=" w-10/12 h-[300px] md:w-1/3 bg-cover bg-[url(/img/tours-home.jpg)] flex justify-center items-end pb-5 bg-center rounded-xl">
                    <Link href="#" className="btn-primary">VER TOURS!</Link>
                </div>
            </div>

            <div className="container mx-auto">
                <ToursHome  title="Nuestros Tours"/>
            </div>

            <div className="container mx-auto">
                <LatestBlogs />
            </div>

            {

            }
        </>
    );
}
