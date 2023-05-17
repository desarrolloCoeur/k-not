import Image from "next/image";
import React from "react";

const Reviews = () => {
    return (
        <div className="my-32 relative">
            <h2>VEN Y DISFRUTA DE LA MEJOR EXPERIENCIA!</h2>
            <Image src="/img/fish-1.png" width={400} height={200} alt="Fish" className="absolute right-0 -top-28 rotate-45 opacity-10 -z-10"/>
            <div className="flex flex-wrap md:flex-nowrap gap-5 items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-5 overflow-y-scroll max-h-[710px]">
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm ">
                        <h4>Randoom User</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                            Went out January of 2020 on the Kokomo and had an
                            amazing day on the water!!!! The crew really knew
                            how to get us on the fish! The Captain made the best
                            ceviche of our Mexico trip! Thank you Elme and crew.
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Randoom User</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                            Went out January of 2020 on the Kokomo and had an
                            amazing day on the water!!!! The crew really knew
                            how to get us on the fish! The Captain made the best
                            ceviche of our Mexico trip! Thank you Elme and crew.
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Randoom User</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                            Went out January of 2020 on the Kokomo and had an
                            amazing day on the water!!!! The crew really knew
                            how to get us on the fish! The Captain made the best
                            ceviche of our Mexico trip! Thank you Elme and crew.
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Randoom User</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                            Went out January of 2020 on the Kokomo and had an
                            amazing day on the water!!!! The crew really knew
                            how to get us on the fish! The Captain made the best
                            ceviche of our Mexico trip! Thank you Elme and crew.
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Randoom User</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                            Went out January of 2020 on the Kokomo and had an
                            amazing day on the water!!!! The crew really knew
                            how to get us on the fish! The Captain made the best
                            ceviche of our Mexico trip! Thank you Elme and crew.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 z-10">
                    <Image
                        src="/img/reviews.jpeg"
                        width={500}
                        height={600}
                        alt="Y-Knot Fishing and Jetski Rental"
                        className="rounded-md mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
