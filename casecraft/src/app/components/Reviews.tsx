import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import PeopleBuying from '../../../public/what-people-are-buying.png'


const Reviews = () => {
  return (
    <div>
      <MaxWidthWrapper className='relative max-w-5xl'>
          <Image aria-hidden="true" src={PeopleBuying} className='absolute select-none hidden xl:block -left-[7rem] top-1/3' alt='peopleBuying'/>  
      </MaxWidthWrapper>
    </div>
  )
}

export default Reviews
