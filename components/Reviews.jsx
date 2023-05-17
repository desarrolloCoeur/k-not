import Image from 'next/image'
import React from 'react'

const Reviews = () => {
  return (
    <div className='flex gap-5'>
        <div className=' w-1/2'>
            <div className='bg-slate-100 rounded-md p-5'>
                <h4>Randoom User</h4>
                <p>⭐⭐⭐⭐⭐</p>
                <p>Went out January of 2020 on the Kokomo and had an amazing day on the water!!!!  The crew really knew how to get us on the fish!  The Captain made the best ceviche of our Mexico trip! Thank you Elme and crew.</p>
            </div>
        </div>
        <div className='w-1/2'>
            <Image src="/img/reviews.jpeg" className=" w-full object-cover" width={300} height={500} alt='Y-Knot Fishing and Jetski Rental'/>
        </div>
    </div>
  )
}

export default Reviews