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
                        <h4>Scott H.</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                        Awesome catching time.  Around 20 fish. 10 skip jacks.  The rest Bonita,mackerel and that lovely marlin


                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Matt B.</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                        We tried several spots before getting some hits. Moved around to find the good temp water and landed 3/5 mahi. Got a bonus Jack cervelle. Saw 2 sailfish but couldn’t get them to hit. Sight fished the mahi at the end. It was incredible to the captain run to the front of the boat and cast out to connect with a mahi.
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Brian S.</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                        Great crew.  We were the only boat out there to catch a pelagic species.  With their help, we landed a 400+ pound black marlin off corbetena.  Highly recommend
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Wes Ehlers</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                        Went out January of 2020 on the Kokomo and had an amazing day on the water!!!!  The crew really knew how to get us on the fish!  The Captain made the best ceviche of our Mexico trip! Thank you Elme and crew.
                        </p>
                    </div>
                    <div className="bg-slate-100 rounded-md p-5 shadow-sm">
                        <h4>Anton Visser</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>
                        Excellent fishing. We caught a ton of fish in a very short period of time. Boat was in reasonably good shape. Captain and deckhand were very friendly and knowledgeable.
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
