import Hero from "@/components/Hero";
import ToursHome  from "@/components/ToursHome";
import Image from "next/image";
import Link from "next/link";
import LatestBlogs from "@/components/LatestBlogs";
import Reviews from "@/components/Reviews";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="container mx-auto w-11/12">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 my-10 ">
                    <div className=" w-full h-[300px] md:w-1/3 bg-cover bg-[url(/img/fishing-home.jpeg)] flex justify-center items-end pb-5 bg-center rounded-xl transition-all hover:scale-[1.009]" >
                        <Link href="#" className="btn-primary">IR A PESCAR!</Link>
                    </div>

                    <div className=" w-full h-[300px] md:w-1/3 bg-cover bg-[url(/img/jet-ski-home.jpg)] flex justify-center items-end pb-5 bg-center rounded-xl transition-all hover:scale-[1.009]">
                        <Link href="#" className="btn-primary">RENTAR JETSKIS!</Link>
                    </div>

                    <div className=" w-full h-[300px] md:w-1/3 bg-cover bg-[url(/img/tours-home.jpg)] flex justify-center items-end pb-5 bg-center rounded-xl transition-all hover:scale-[1.009]">
                        <Link href="#" className="btn-primary">VER TOURS!</Link>
                    </div>
                </div>


                <ToursHome  title="Nuestros Tours"/>

                <Reviews/>
                <LatestBlogs />


            </div>
        </>
    );
}
