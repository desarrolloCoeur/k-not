import Image from "next/image";
import React from "react";
import Link from "next/link";

const Reviews = () => {
    return (
        <div className="my-32 relative">
            <h2>VEN Y DISFRUTA DE LA MEJOR EXPERIENCIA!</h2>
            <div className="flex gap-6 pb-10">
                <div>
                    <Link href="https://www.google.com/search?q=y-knot+fishing+review+&sca_esv=576523393&rlz=1C1UEAD_esMX1078MX1078&sxsrf=AM9HkKn3XugL8M11MKmWzzCfYVFHsIJCVw%3A1698251383734&ei=d0I5ZdS2LOqMur8PxraKyAY&ved=0ahUKEwiUzt2zz5GCAxVqhu4BHUabAmkQ4dUDCBA&uact=5&oq=y-knot+fishing+review+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnkta25vdCBmaXNoaW5nIHJldmlldyAyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMggQIRgWGB4YHUiUBlDIA1jIA3ACeACQAQCYAc8BoAHPAaoBAzItMbgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp" target="_blank" className="hover:scale-[1.010]">
                        <Image src="/img/5-Star.jpg" width={145} height={130}/>
                    </Link>
                </div>
                <div className="h-[130px] w-[215px]">
                    <Link href="https://fishingbooker.com/charters/view/16243" target="_blank" className="hover:scale-[1.010]">
                        <div className="bg-[#2080BF] rounded-md px-2 py-2">
                            <Image src="/img/fishing-booker.svg" alt="Fishing Booker - Y-knot Fihshing & Jetski Rental" width={120} height={100}/>
                            <p className="text-sm  font-bold text-white pb-0 uppercase">5 STARS EXPERIENCES</p>
                            <p className="pb-0">⭐⭐⭐⭐⭐</p>
                            <p className="text-sm  font-bold text-white pb-0 uppercase">Y-knot Fishing & Seadoos</p>
                        </div>
                    </Link>
                </div>
                <div id="TA_cdsratingsonlynarrow604" class="TA_cdsratingsonlynarrow w-[215px] my-auto">
                    <ul id="s32bjv" class="TA_links sXxVpeoL4I">
                        <li id="uHgXBETg" class="N82vOxZY">
                            <a target="_blank" href="https://www.tripadvisor.com.mx/Attraction_Review-g499443-d7717525-Reviews-Y_Knot_Fishing-Punta_de_Mita_Pacific_Coast.html">
                                <img src="https://www.tripadvisor.com.mx/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
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
<script async src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=604&amp;locationId=7717525&amp;lang=es_MX&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
