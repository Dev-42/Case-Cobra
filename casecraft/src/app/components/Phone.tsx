import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { HTMLAttributes } from 'react'
import PhoneDark from '../../../public/phone-template-dark-edges.png'
import PhoneLight from '../../../public/phone-template-white-edges.png'

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string | StaticImageData
    dark?:boolean
}

const Phone = ({imgSrc,className,dark=false,...props}:PhoneProps) => {
  return (
    <div className={cn('relative pointer-events-none z-50 overflow-hidden',className)} {...props}>
      <Image src={dark ? PhoneDark : PhoneLight} alt='phoneImg' className='pointer-events-none z-50 select-none'/>
      <div className='absolute -z-10 inset-0'>
          <Image src = {imgSrc} className='object-cover' alt='overlayingPhone'/>  
      </div>
    </div>
  )
}

export default Phone
