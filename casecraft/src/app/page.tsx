import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import Logo from '../../public/CaseCraftLogo.webp'
import User1 from '../../public/users/user-1.png'
import User2 from '../../public/users/user-2.png'
import User3 from '../../public/users/user-3.png'
import User4 from '../../public/users/user-4.jpg'
import User5 from '../../public/users/user-5.jpg'
import YourImage from '../../public/your-image.png'
import SnakeImg from '../../public/snake-2.png'
import Line from '../../public/line.png'
import Image from 'next/image';
import {ArrowRight, Check,Star} from 'lucide-react'
import Phone from './components/Phone'
import FirstTestimonial from '../../public/testimonials/1.jpg' 
import { Icons } from './components/Icons'
import { Reviews } from './components/Reviews'
import Arrow from '../../public/arrow.png'
import HorseImg from '../../public/horse.jpg'
import HorseMobileCover from '../../public/horse_phone.jpg'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'


export default function Home() {
  return (
    <div className="bg-slate-50 z-0">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 max-w-screen mx-auto">
            <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                  <div className='absolute w-28 left-[-6px] top-[-3rem] hidden lg:block'>
                      <Image src={Logo} alt='logoImage' className='w-full h-full rounded-full object-cover'></Image>
                  </div>
                  <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bont !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                    Craft Your <span className='bg-gradient-to-r from-yellow-500 to-red-500 px-2 text-white'>Identity</span> on a Case
                  </h1>
                  <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                    Turn your cherished moments into a <span className='font-semibold'>one-of-a-kind</span> phone case.  
                    With CaseCraft, you&apos;re not just protecting your phone&mdash;you&apos;re preserving your memories.
                  </p>
                  <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                      <div className='space-y-2'>
                        <li className='flex gap-1.5 items-center text-left'>
                          <Check className='h-5 w-5 shrink-0 text-[#ed7629]' />
                          Crafted from premium, long-lasting materials
                        </li>
                        <li className='flex gap-1.5 items-center text-left'>
                          <Check className='h-5 w-5 shrink-0 text-[#ed7629]' />
                          Vibrant prints that stay fresh for 5 years
                        </li>
                        <li className='flex gap-1.5 items-center text-left'>
                          <Check className='h-5 w-5 shrink-0 text-[#ed7629]' />
                          Compatible with the latest iPhone models
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
                            <Star className='h-4 w-4 text-[#fdcc06] fill-[#fdcc06]'/>   
                            <Star className='h-4 w-4 text-[#fdcc06] fill-[#fdcc06]'/>   
                            <Star className='h-4 w-4 text-[#fdcc06] fill-[#fdcc06]'/>   
                            <Star className='h-4 w-4 text-[#fdcc06] fill-[#fdcc06]'/>   
                            <Star className='h-4 w-4 text-[#fdcc06] fill-[#fdcc06]'/>   
                        </div>
                        <p><span className='font-semibold'>1.250k</span> happy customers</p>
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
      {/* value section */}
      <section className='bg-slate-100 py-24'>
          <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
              <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
                 <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>What our <span className='relative px-2 '>customers<Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-primary'/></span> say</h2> 
                 <Image src={SnakeImg} alt='snakeImg' className='w-24 order-0 lg:order-2'/>
              </div>
              <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
                <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl-pr-20'>
                  <div className='flex gap-0.5 mb-2'>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06]'/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                  </div>
                  <div className='text-lg leading-8'>
                    <p>
                      &quot;I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases.This one, besides a barely noticeable scratch on the corner, <span className='p-0.5 bg-slate-800 text-white'>looks brand new after about half a year. </span> I dig it.&quot;
                    </p>
                  </div>
                  <div className='flex gap-4 mt-2'>
                    <Image className='rounded-full h-12 w-12 object-cover' src={User4} alt='user4'/>
                    <div className='flex flex-col'>
                      <p className='font-semibold'>Josh</p>
                      <div className='flex gap-1.5 items-center text-zinc-600'>
                        <Check className='h04 w-4 stroke-[3px] text-green-600'/>
                        <p className='text-sm'>Verified Purchase</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second User Reveiw */}
                <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl-pr-20'>
                  <div className='flex gap-0.5 mb-2'>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06]'/>
                    <Star className='h-5 w-5 text-[#fdcc06] fill-[#fdcc06] '/>
                  </div>
                  <div className='text-lg leading-8'>
                    <p>
                      &quot;The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and <span className='p-0.5 bg-slate-800 text-white'>the image is super clear</span>, on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.&quot;
                    </p>
                  </div>
                  <div className='flex gap-4 mt-2'>
                    <Image className='rounded-full h-12 w-12 object-cover' src={User1} alt='user1'/>
                    <div className='flex flex-col'>
                      <p className='font-semibold'>Jonathan</p>
                      <div className='flex gap-1.5 items-center text-zinc-600'>
                        <Check className='h04 w-4 stroke-[3px] text-green-600'/>
                        <p className='text-sm'>Verified Purchase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </MaxWidthWrapper>
          {/* Animated part of the website */}
          <div className='pt-16'>
            <Reviews />
          </div>
      </section>
      <section>
        <MaxWidthWrapper className='py-24'>
            <div className='mb-12 px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl sm:text-center'>
                <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>Upload your photo and get <span className='relative px-2 bg-green-600 text-white'>your own case</span> now</h2> 
              </div>
            </div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
                <Image src={Arrow} alt='Arrow image' className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'/>
                <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                  <Image src={HorseImg} alt='HorseImg' className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'/>
                </div>
                <Phone className='w-60' imgSrc={HorseMobileCover}/>
              </div>
            </div>
            <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
              <li className='w-fit'>
                <Check className='h-5 w-5 text-[#ed7629] inline mr-1.5 '/>
                High-quality silicone material
              </li>
              <li className='w-fit'>
                <Check className='h-5 w-5 text-[#ed7629] inline mr-1.5 '/>
                Scratch- and fingerprint resistant coating
              </li>
              <li className='w-fit'>
                <Check className='h-5 w-5 text-[#ed7629] inline mr-1.5 '/>
                Wireless charging compatible
              </li>
              <li className='w-fit'>
                <Check className='h-5 w-5 text-[#ed7629] inline mr-1.5 '/>
                5 year print warranty
              </li>
              <div className='flex justify-center'>
                 <Link className={buttonVariants({
                  size: 'lg',
                  className: "mx-auto mt-8"
                 })} href='/configure/upload'>Create your case now <ArrowRight className='h-4 w-4 ml-1.5'/></Link> 
              </div>
            </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
