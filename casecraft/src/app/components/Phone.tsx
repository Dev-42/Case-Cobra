import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { HTMLAttributes } from 'react'
import PhoneDark from '../../../public/phone-template-dark-edges.png'
import PhoneLight from '../../../public/phone-template-white-edges.png'

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string | StaticImageData
    dark?:boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn('relative pointer-events-none z-50 overflow-hidden', className)}
      {...props}>
      <Image
        src={dark ? PhoneDark : PhoneLight}
        alt='Phone Frame'
        className='pointer-events-none z-50 select-none'
        layout="responsive"
      />
      <div className='absolute inset-0 -z-10'>
        <Image
          src={imgSrc}
          alt='Phone Content'
          className='object-cover'
          layout="fill"
        />
      </div>
    </div>
  );
};


export default Phone
