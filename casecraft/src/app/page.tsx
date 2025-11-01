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
import { ArrowRight, Check, Star, Shield, Sparkles, Palette } from 'lucide-react'
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
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                  {/* Logo Badge */}
                  <div className='absolute w-28 left-[-6px] top-[-3rem] hidden lg:block animate-in fade-in-0 zoom-in-95 duration-700'>
                      <div className='relative'>
                        <Image src={Logo} alt='CaseCraft Logo' className='w-full h-full rounded-full object-cover shadow-xl ring-4 ring-white'/>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/20 to-red-500/20'/>
                      </div>
                  </div>

                  {/* Main Heading */}
                  <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-[1.1] text-gray-900 text-5xl md:text-6xl lg:text-7xl animate-in fade-in-0 slide-in-from-bottom-4 duration-1000'>
                    Craft Your <span className='relative inline-block'>
                      <span className='bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 px-2 text-white rounded-lg shadow-lg'>
                        Identity
                      </span>
                    </span> on a Case
                  </h1>

                  {/* Subheading */}
                  <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance text-gray-600 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-150'>
                    Turn your cherished moments into a <span className='font-bold text-gray-900 bg-yellow-50 px-1.5 py-0.5 rounded'>one-of-a-kind</span> phone case.  
                    With CaseCraft, you&apos;re not just protecting your phone&mdash;you&apos;re <span className='font-semibold text-orange-600'>preserving your memories.</span>
                  </p>

                  {/* Feature List */}
                  <ul className='mt-10 space-y-3 text-left font-medium flex flex-col items-center sm:items-start animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300'>
                      <div className='space-y-3'>
                        <li className='flex gap-2.5 items-center text-left group'>
                          <div className='flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shrink-0 group-hover:scale-110 transition-transform'>
                            <Check className='h-4 w-4 text-white stroke-[3px]' />
                          </div>
                          <span className='text-gray-700'>Crafted from <span className='font-semibold text-gray-900'>premium, long-lasting</span> materials</span>
                        </li>
                        <li className='flex gap-2.5 items-center text-left group'>
                          <div className='flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shrink-0 group-hover:scale-110 transition-transform'>
                            <Check className='h-4 w-4 text-white stroke-[3px]' />
                          </div>
                          <span className='text-gray-700'><span className='font-semibold text-gray-900'>Vibrant prints</span> that stay fresh for 5 years</span>
                        </li>
                        <li className='flex gap-2.5 items-center text-left group'>
                          <div className='flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shrink-0 group-hover:scale-110 transition-transform'>
                            <Check className='h-4 w-4 text-white stroke-[3px]' />
                          </div>
                          <span className='text-gray-700'>Compatible with the <span className='font-semibold text-gray-900'>latest iPhone models</span></span>
                        </li>
                      </div>
                  </ul>

                  {/* Social Proof */}
                  <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500'>
                    <div className='flex -space-x-4'>
                        <Image src={User1} alt="Happy Customer" className='inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md hover:scale-110 transition-transform'/>
                        <Image src={User2} alt="Happy Customer" className='inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md hover:scale-110 transition-transform'/>
                        <Image src={User3} alt="Happy Customer" className='inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md hover:scale-110 transition-transform'/>
                        <Image src={User4} alt="Happy Customer" className='inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md hover:scale-110 transition-transform object-cover'/>
                        <Image src={User5} alt="Happy Customer" className='inline-block h-12 w-12 rounded-full ring-4 ring-white shadow-md hover:scale-110 transition-transform object-cover'/>
                    </div>
                    <div className='flex flex-col justify-between items-center sm:items-start'>
                        <div className='flex gap-0.5 mb-1'>
                            <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>   
                            <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>   
                            <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>   
                            <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>   
                            <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>   
                        </div>
                        <p className='text-gray-700'><span className='font-bold text-2xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'>1,250+</span> <span className='text-gray-600'>happy customers</span></p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Hero Image */}
            <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit relative'>
                <div className='relative md:max-w-xl animate-in fade-in-0 zoom-in-95 duration-1000 delay-300'>
                    <Image src={YourImage} alt="Your Custom Design" className='absolute w-40 lg:w-52 left-10 sm:left-[11rem] -top-[8rem] select-none hidden sm:block lg:hidden xl:block animate-in fade-in-0 slide-in-from-top-8 duration-1000 delay-700'/>
                    <Image src={Line} alt="Design Element" className='absolute w-20 left-0 sm:-left-6 -bottom-6 select-none animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-500'/>
                    <div className='relative hover:scale-105 transition-transform duration-500'>
                      <Phone className='w-64' imgSrc={FirstTestimonial}/>
                      <div className='absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-red-500/10 rounded-[3rem] pointer-events-none'/>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
      </section>

      {/* Value Proposition Banner */}
      <section className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 border-y border-gray-700'>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='flex flex-col items-center gap-3 group'>
              <div className='p-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg group-hover:scale-110 transition-transform'>
                <Shield className='h-6 w-6 text-white'/>
              </div>
              <h3 className='font-bold text-white text-lg'>Premium Protection</h3>
              <p className='text-gray-300 text-sm'>Military-grade drop protection</p>
            </div>
            <div className='flex flex-col items-center gap-3 group'>
              <div className='p-3 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg group-hover:scale-110 transition-transform'>
                <Sparkles className='h-6 w-6 text-white'/>
              </div>
              <h3 className='font-bold text-white text-lg'>HD Quality Prints</h3>
              <p className='text-gray-300 text-sm'>Crystal clear, fade-resistant colors</p>
            </div>
            <div className='flex flex-col items-center gap-3 group'>
              <div className='p-3 rounded-full bg-gradient-to-br from-red-400 to-pink-500 shadow-lg group-hover:scale-110 transition-transform'>
                <Palette className='h-6 w-6 text-white'/>
              </div>
              <h3 className='font-bold text-white text-lg'>Unlimited Creativity</h3>
              <p className='text-gray-300 text-sm'>Design exactly what you imagine</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Testimonials Section */}
      <section className='bg-gradient-to-b from-slate-50 to-slate-100 py-24'>
          <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
              {/* Section Header */}
              <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
                 <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                  What our <span className='relative px-2'>
                    customers
                    <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-500'/>
                  </span> say
                 </h2> 
                 <Image src={SnakeImg} alt='Decorative element' className='w-24 order-0 lg:order-2'/>
              </div>

              {/* Testimonial Cards */}
              <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-8'>
                {/* First Testimonial */}
                <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl-pr-20 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='flex gap-0.5 mb-2'>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                  </div>
                  <div className='text-lg leading-8 text-gray-700'>
                    <p>
                      &quot;I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, <span className='px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded'>looks brand new after about half a year.</span> I dig it.&quot;
                    </p>
                  </div>
                  <div className='flex gap-4 mt-2'>
                    <Image className='rounded-full h-12 w-12 object-cover ring-2 ring-orange-100' src={User4} alt='Josh - Happy Customer'/>
                    <div className='flex flex-col'>
                      <p className='font-bold text-gray-900'>Josh</p>
                      <div className='flex gap-1.5 items-center text-gray-500'>
                        <Check className='h-4 w-4 stroke-[3px] text-green-600'/>
                        <p className='text-sm font-medium'>Verified Purchase</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Testimonial */}
                <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl-pr-20 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='flex gap-0.5 mb-2'>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                    <Star className='h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm'/>
                  </div>
                  <div className='text-lg leading-8 text-gray-700'>
                    <p>
                      &quot;The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and <span className='px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded'>the image is super clear</span>, on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.&quot;
                    </p>
                  </div>
                  <div className='flex gap-4 mt-2'>
                    <Image className='rounded-full h-12 w-12 object-cover ring-2 ring-orange-100' src={User1} alt='Jonathan - Happy Customer'/>
                    <div className='flex flex-col'>
                      <p className='font-bold text-gray-900'>Jonathan</p>
                      <div className='flex gap-1.5 items-center text-gray-500'>
                        <Check className='h-4 w-4 stroke-[3px] text-green-600'/>
                        <p className='text-sm font-medium'>Verified Purchase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </MaxWidthWrapper>

          {/* Animated Reviews */}
          <div className='pt-16'>
            <Reviews />
          </div>
      </section>
      {/* CTA Section */}
      <section className='bg-white py-24'>
        <MaxWidthWrapper className='py-12'>
            {/* Section Header */}
            <div className='mb-16 px-6 lg:px-8'>
              <div className='mx-auto max-w-3xl text-center'>
                <h2 className='tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                  Upload your photo and get <span className='relative inline-block'>
                    <span className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-lg shadow-lg'>your own case</span>
                  </span> now
                </h2>
                <p className='mt-6 text-lg text-gray-600'>
                  Transform your favorite memories into a stunning phone case in minutes
                </p>
              </div>
            </div>

            {/* Before/After Showcase */}
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
                <Image src={Arrow} alt='Transformation arrow' className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 opacity-70'/>
                
                {/* Original Image */}
                <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 ring-2 ring-gray-200 overflow-hidden group'>
                  <Image src={HorseImg} alt='Your Original Photo' className='rounded-2xl object-cover bg-white shadow-2xl ring-1 ring-gray-300 h-full w-full group-hover:scale-105 transition-transform duration-500'/>
                  <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-700 shadow-md'>
                    Your Photo
                  </div>
                </div>

                {/* Final Product */}
                <div className='relative group'>
                  <div className='absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-[4rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity'/>
                  <Phone className='w-60 relative hover:scale-105 transition-transform duration-500' imgSrc={HorseMobileCover}/>
                  <div className='absolute top-4 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg'>
                    Your Case ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <ul className='mx-auto mt-16 max-w-prose sm:text-lg space-y-4 w-fit'>
              <li className='flex items-center gap-3 group'>
                <div className='flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shrink-0 group-hover:scale-110 transition-transform'>
                  <Check className='h-5 w-5 text-white stroke-[3px]'/>
                </div>
                <span className='text-gray-700 font-medium'>High-quality <span className='font-bold text-gray-900'>silicone material</span></span>
              </li>
              <li className='flex items-center gap-3 group'>
                <div className='flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shrink-0 group-hover:scale-110 transition-transform'>
                  <Check className='h-5 w-5 text-white stroke-[3px]'/>
                </div>
                <span className='text-gray-700 font-medium'><span className='font-bold text-gray-900'>Scratch</span>- and <span className='font-bold text-gray-900'>fingerprint resistant</span> coating</span>
              </li>
              <li className='flex items-center gap-3 group'>
                <div className='flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shrink-0 group-hover:scale-110 transition-transform'>
                  <Check className='h-5 w-5 text-white stroke-[3px]'/>
                </div>
                <span className='text-gray-700 font-medium'><span className='font-bold text-gray-900'>Wireless charging</span> compatible</span>
              </li>
              <li className='flex items-center gap-3 group'>
                <div className='flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 shrink-0 group-hover:scale-110 transition-transform'>
                  <Check className='h-5 w-5 text-white stroke-[3px]'/>
                </div>
                <span className='text-gray-700 font-medium'><span className='font-bold text-gray-900'>5 year</span> print warranty</span>
              </li>

              {/* CTA Button */}
              <div className='flex justify-center pt-6'>
                 <Link className={buttonVariants({
                  size: 'lg',
                  className: "mx-auto bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transition-all font-bold text-lg px-8 py-6 group"
                 })} href='/configure/upload'>
                  Create your case now 
                  <ArrowRight className='h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform'/>
                 </Link> 
              </div>
            </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
