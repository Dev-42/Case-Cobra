import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import Logo from '../../public/CaseCraftLogo.webp'
import User1 from '../../public/users/user-1.png'
import User2 from '../../public/users/user-2.png'
import User3 from '../../public/users/user-3.png'
import User4 from '../../public/users/user-4.jpg'
import User5 from '../../public/users/user-5.jpg'
import YourImage from '../../public/your-image.png'
import Line from '../../public/line.png'
import Image from 'next/image';
import {Check,Star} from 'lucide-react'
import Phone from './components/Phone'
import FirstTestimonial from '../../public/testimonials/1.jpg' 



export default function Home() {
  return (
    <div className="bg-slate-50 overflow-x-hidden">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 max-w-screen mx-auto">
            <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                  <div className='absolute w-28 left-[-6px] top-[-3rem] hidden lg:block'>
                      <Image src={Logo} alt='logoImage' className='w-full h-full rounded-full object-cover'></Image>
                  </div>
                  <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bont !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                    Your Image on a <span className='bg-green-600 px-2 text-white'>Custom</span> Phone Case
                  </h1>
                  <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                    Capture your favorite memories with your own , <span className='font-semibold'>one-of-one</span> phone case.
                    CaseCobra allows you to protect your memories , not just your phone case.
                  </p>
                  <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                      <div className='space-y-2'>
                          <li className='flex gap-1.5 items-center text-left'>
                            <Check className='h-5 w-5 shrink-0 text-green-600'/>
                            High-quality, durable material 
                          </li>
                          <li className='flex gap-1.5 items-center text-left'>
                            <Check className='h-5 w-5 shrink-0 text-green-600'/>
                            5 year print guarantee 
                          </li>
                          <li className='flex gap-1.5 items-center text-left'>
                            <Check className='h-5 w-5 shrink-0 text-green-600'/>
                            Mordern iPhone models supported 
                          </li>
                      </div>
                  </ul>
                  <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                    <div className='flex -space-x-4'>
                        <Image src ={User1} alt="userImage" className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 '/>
                        <Image src ={User2} alt="userImage" className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 '/>
                        <Image src ={User3} alt="userImage" className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 '/>
                        <Image src ={User4} alt="userImage" className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 '/>
                        <Image src ={User5} alt="userImage" className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100 '/>
                    </div>
                    <div className='flex flex-col justify-between items-center sm:items-start'>
                        <div className='flex gap-0.5'>
                            <Star className='h-4 w-4 text-green-600 fill-green-600'/>   
                            <Star className='h-4 w-4 text-green-600 fill-green-600'/>   
                            <Star className='h-4 w-4 text-green-600 fill-green-600'/>   
                            <Star className='h-4 w-4 text-green-600 fill-green-600'/>   
                            <Star className='h-4 w-4 text-green-600 fill-green-600'/>   
                        </div>
                        <p><span className='font-semibold'>1.250</span> happy customers</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit relative'>
                <div className='relative md:max-w-xl'>
                    <Image src={YourImage} alt="yourDummyImage" className='absolute w-40 lg:w-52 left-10 sm:left-[11rem] -top-[8rem] select-none hidden sm:block lg:hidden xl:block'/>
                    <Image src={Line} alt="yourDummyImage" className='absolute w-20 left-0 sm:-left-6 -bottom-6 select-none'/>
                    <Phone className='w-64' imgSrc={FirstTestimonial}/>
                </div>
            </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
