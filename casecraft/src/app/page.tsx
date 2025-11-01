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
import { ArrowRight, Check, Star, Shield, Sparkles, Palette, Zap, Award, TrendingUp, Heart, Package, Truck } from 'lucide-react'
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
    <div className="bg-white overflow-hidden">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-3 md:py-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
        <p className="text-xs sm:text-sm md:text-base font-semibold relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-4">
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse flex-shrink-0" />
          <span className="text-center">
            <span className="hidden sm:inline">Limited Time: </span>
            <span className="underline">Free shipping</span> 
            <span className="hidden xs:inline"> on orders</span> over $50!
          </span>
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse flex-shrink-0" />
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50/50 via-white to-white">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-20 xl:pt-28 lg:pb-52 relative z-10">
            <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                  {/* Floating Badge - Bestseller - Always Centered */}
                  <div className='mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-orange-300 rounded-full shadow-lg animate-in fade-in-0 zoom-in-95 duration-700 self-center'>
                    <TrendingUp className='h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-600' />
                    <span className='text-xs sm:text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>
                      #1 Custom Phone Cases
                    </span>
                    <Award className='h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-600' />
                  </div>

                  {/* Logo Badge */}
                  <div className='absolute w-32 left-[-6px] top-[-4rem] hidden lg:block animate-in fade-in-0 zoom-in-95 duration-700'>
                      <div className='relative group cursor-pointer'>
                        <div className='absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity'></div>
                        <Image src={Logo} alt='CaseCraft Logo' className='relative w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-white'/>
                      </div>
                  </div>

                  {/* Main Heading */}
                  <h1 className='relative w-fit tracking-tight text-balance mt-2 sm:mt-4 font-black !leading-[1.05] text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in-0 slide-in-from-bottom-4 duration-1000'>
                    Craft Your{' '}
                    <span className='relative inline-block group'>
                      <span className='absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity'></span>
                      <span className='relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 px-2 sm:px-3 py-1 text-white rounded-lg sm:rounded-xl shadow-2xl inline-block transform hover:scale-105 transition-transform'>
                        Identity
                      </span>
                    </span>
                    <br className='hidden sm:block' />
                    <span className='sm:hidden'> </span>
                    on a Case
                  </h1>

                  {/* Subheading with emphasis */}
                  <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl lg:pr-10 max-w-prose text-center lg:text-left text-balance text-gray-700 leading-relaxed font-medium animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-150 px-2 sm:px-0'>
                    Turn your cherished moments into a{' '}
                    <span className='relative inline-block'>
                      <span className='font-black text-gray-900 bg-gradient-to-r from-yellow-100 to-orange-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg border-b-2 sm:border-b-4 border-orange-400'>one-of-a-kind</span>
                    </span>{' '}
                    phone case.
                  </p>
                  <p className='mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-prose text-center lg:text-left animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200 px-2 sm:px-0'>
                    You&apos;re not just protecting your phone—you&apos;re{' '}
                    <span className='font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>preserving your memories.</span>
                  </p>

                  {/* CTA Button - Primary */}
                  <div className='mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start w-full sm:w-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 px-4 sm:px-0'>
                    <Link 
                      href='/configure/upload'
                      className='group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 active:scale-95 sm:hover:scale-105 overflow-hidden touch-manipulation'
                    >
                      <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                      <Sparkles className='relative h-4 w-4 sm:h-5 sm:w-5 mr-2' />
                      <span className='relative'>Create Your Case Now</span>
                      <ArrowRight className='relative h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform' />
                    </Link>
                    <Link 
                      href='#testimonials'
                      className='group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 active:scale-95 touch-manipulation'
                    >
                      <Heart className='h-4 w-4 sm:h-5 sm:w-5 mr-2 text-red-500' />
                      See Reviews
                    </Link>
                  </div>

                  {/* Feature List - Compact Badges */}
                  <div className='mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400 px-4 sm:px-0'>
                    <div className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-md border border-gray-200'>
                      <div className='flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex-shrink-0'>
                        <Check className='h-3 w-3 sm:h-4 sm:w-4 text-white stroke-[3px]' />
                      </div>
                      <span className='text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap'>Premium Materials</span>
                    </div>
                    <div className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-md border border-gray-200'>
                      <div className='flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex-shrink-0'>
                        <Check className='h-3 w-3 sm:h-4 sm:w-4 text-white stroke-[3px]' />
                      </div>
                      <span className='text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap'>5-Year Warranty</span>
                    </div>
                    <div className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full shadow-md border border-gray-200'>
                      <div className='flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex-shrink-0'>
                        <Check className='h-3 w-3 sm:h-4 sm:w-4 text-white stroke-[3px]' />
                      </div>
                      <span className='text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap'>All iPhone Models</span>
                    </div>
                  </div>

                  {/* Social Proof - Enhanced */}
                  <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-200 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500 mx-4 sm:mx-0'>
                    <div className='flex -space-x-3 sm:-space-x-4'>
                        <Image src={User1} alt="Happy Customer" className='inline-block h-11 w-11 sm:h-14 sm:w-14 rounded-full ring-3 sm:ring-4 ring-white shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer'/>
                        <Image src={User2} alt="Happy Customer" className='inline-block h-11 w-11 sm:h-14 sm:w-14 rounded-full ring-3 sm:ring-4 ring-white shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer'/>
                        <Image src={User3} alt="Happy Customer" className='inline-block h-11 w-11 sm:h-14 sm:w-14 rounded-full ring-3 sm:ring-4 ring-white shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer'/>
                        <Image src={User4} alt="Happy Customer" className='inline-block h-11 w-11 sm:h-14 sm:w-14 rounded-full ring-3 sm:ring-4 ring-white shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer object-cover'/>
                        <Image src={User5} alt="Happy Customer" className='inline-block h-11 w-11 sm:h-14 sm:w-14 rounded-full ring-3 sm:ring-4 ring-white shadow-lg hover:scale-110 hover:z-10 transition-transform cursor-pointer object-cover'/>
                    </div>
                    <div className='flex flex-col justify-center items-center sm:items-start'>
                        <div className='flex gap-0.5 sm:gap-1 mb-1.5 sm:mb-2'>
                            <Star className='h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>   
                            <Star className='h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>   
                            <Star className='h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>   
                            <Star className='h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>   
                            <Star className='h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>   
                        </div>
                        <p className='text-gray-800 font-semibold text-base sm:text-lg text-center sm:text-left'>
                          <span className='font-black text-2xl sm:text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>1,250+</span>
                          <span className='text-gray-600 ml-1.5 sm:ml-2 text-sm sm:text-base'>happy customers</span>
                        </p>
                        <p className='text-xs sm:text-sm text-gray-500 mt-1'>⭐ Rated 4.9/5.0 on Trustpilot</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Hero Image */}
            <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit relative'>
                <div className='relative md:max-w-xl animate-in fade-in-0 zoom-in-95 duration-1000 delay-300'>
                    {/* Floating "Your Image" badge */}
                    <Image src={YourImage} alt="Your Custom Design" className='absolute w-40 lg:w-52 left-10 sm:left-[11rem] -top-[8rem] select-none hidden sm:block lg:hidden xl:block animate-in fade-in-0 slide-in-from-top-8 duration-1000 delay-700 hover:rotate-6 transition-transform cursor-pointer'/>
                    
                    {/* Decorative Line */}
                    <Image src={Line} alt="Design Element" className='absolute w-20 left-0 sm:-left-6 -bottom-6 select-none animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-500'/>
                    
                    {/* Phone with Enhanced Effects */}
                    <div className='relative group cursor-pointer'>
                      {/* Glow effect */}
                      <div className='absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-[4rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity'></div>
                      
                      {/* Phone Component */}
                      <div className='relative hover:scale-105 transition-transform duration-500'>
                    <Phone className='w-64' imgSrc={FirstTestimonial}/>
                      </div>
                      
                      {/* "Live Preview" Badge */}
                      <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <p className='text-sm font-bold text-gray-800'>Live Preview!</p>
                      </div>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
      </section>

      {/* Stats Bar */}
      <section className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzbWFsbEdyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
        
        <MaxWidthWrapper className='relative z-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center px-4 sm:px-0'>
            {/* Stat 1 */}
            <div className='flex flex-col items-center gap-2 sm:gap-3 group active:scale-95 sm:hover:scale-105 transition-transform touch-manipulation'>
              <div className='p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl group-hover:shadow-orange-500/50 transition-shadow'>
                <Package className='h-6 w-6 sm:h-8 sm:w-8 text-white'/>
              </div>
              <div>
                <h3 className='font-black text-white text-2xl sm:text-3xl md:text-4xl'>50K+</h3>
                <p className='text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium'>Cases Created</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className='flex flex-col items-center gap-2 sm:gap-3 group active:scale-95 sm:hover:scale-105 transition-transform touch-manipulation'>
              <div className='p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-2xl group-hover:shadow-red-500/50 transition-shadow'>
                <Heart className='h-6 w-6 sm:h-8 sm:w-8 text-white'/>
              </div>
              <div>
                <h3 className='font-black text-white text-2xl sm:text-3xl md:text-4xl'>98%</h3>
                <p className='text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium'>Satisfaction</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className='flex flex-col items-center gap-2 sm:gap-3 group active:scale-95 sm:hover:scale-105 transition-transform touch-manipulation'>
              <div className='p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 shadow-2xl group-hover:shadow-pink-500/50 transition-shadow'>
                <Award className='h-6 w-6 sm:h-8 sm:w-8 text-white'/>
              </div>
              <div>
                <h3 className='font-black text-white text-2xl sm:text-3xl md:text-4xl'>4.9★</h3>
                <p className='text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium'>Rating</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className='flex flex-col items-center gap-2 sm:gap-3 group active:scale-95 sm:hover:scale-105 transition-transform touch-manipulation'>
              <div className='p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 shadow-2xl group-hover:shadow-purple-500/50 transition-shadow'>
                <Truck className='h-6 w-6 sm:h-8 sm:w-8 text-white'/>
              </div>
              <div>
                <h3 className='font-black text-white text-2xl sm:text-3xl md:text-4xl'>2-3</h3>
                <p className='text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1 font-medium'>Days Ship</p>
              </div>
            </div>
          </div>

          {/* Additional Trust Badges */}
          <div className='mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-6 items-center px-4'>
            <div className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'>
              <Shield className='h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0' />
              <span className='text-white font-semibold text-xs sm:text-sm whitespace-nowrap'>Secure Checkout</span>
            </div>
            <div className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'>
              <Zap className='h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0' />
              <span className='text-white font-semibold text-xs sm:text-sm whitespace-nowrap'>Fast Shipping</span>
            </div>
            <div className='flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'>
              <Heart className='h-4 w-4 sm:h-5 sm:w-5 text-red-400 flex-shrink-0' />
              <span className='text-white font-semibold text-xs sm:text-sm whitespace-nowrap'>Made with Love</span>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className='bg-gradient-to-b from-white via-orange-50/30 to-white py-24 relative'>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

          <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-20 relative z-10'>
              {/* Section Header - Enhanced */}
              <div className='flex flex-col items-center gap-6 text-center'>
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border-2 border-orange-300 rounded-full'>
                  <Star className='h-4 w-4 text-orange-600 fill-orange-600' />
                  <span className='text-sm font-bold text-orange-700'>Customer Reviews</span>
                </div>
                
              <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
                  <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-[1.1] font-black text-5xl md:text-6xl lg:text-7xl text-gray-900'>
                    What our{' '}
                    <span className='relative inline-block px-2'>
                      <span className='relative z-10'>customers</span>
                      <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-500'/>
                    </span>{' '}
                    <br className='lg:hidden'/>
                    are saying
                  </h2> 
                  <Image src={SnakeImg} alt='Decorative element' className='w-20 lg:w-24 order-0 lg:order-2 animate-bounce'/>
                </div>
                
                <p className='text-xl text-gray-600 max-w-2xl'>
                  Join thousands of happy customers who transformed their phones into works of art
                </p>
              </div>

              {/* Testimonial Cards - Enhanced */}
              <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-8 lg:gap-10'>
                {/* First Testimonial */}
                <div className='group relative flex flex-auto flex-col gap-5 bg-white p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 hover:-translate-y-1'>
                  {/* Quote Icon */}
                  <div className='absolute top-6 right-6 text-orange-200 text-6xl font-serif leading-none opacity-50'>&ldquo;</div>
                  
                  {/* Stars */}
                  <div className='flex gap-1 mb-2 relative z-10'>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                  </div>
                  
                  {/* Review Text */}
                  <div className='text-lg leading-relaxed text-gray-700 relative z-10'>
                    <p className='font-medium'>
                      &quot;I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner,{' '}
                      <span className='relative inline-block'>
                        <span className='px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-md'>
                          looks brand new after about half a year.
                        </span>
                      </span>{' '}
                      I dig it.&quot;
                    </p>
                  </div>
                  
                  {/* User Info */}
                  <div className='flex gap-4 mt-auto pt-4 border-t border-gray-100 relative z-10'>
                    <div className='relative'>
                      <Image className='rounded-full h-14 w-14 object-cover ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all' src={User4} alt='Josh - Happy Customer'/>
                      <div className='absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white'>
                        <Check className='h-3 w-3 text-white stroke-[3px]'/>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <p className='font-bold text-gray-900 text-lg'>Josh</p>
                      <p className='text-sm text-gray-500 font-medium'>Verified Purchase</p>
                    </div>
                  </div>
                </div>

                {/* Second Testimonial */}
                <div className='group relative flex flex-auto flex-col gap-5 bg-white p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 hover:-translate-y-1'>
                  {/* Quote Icon */}
                  <div className='absolute top-6 right-6 text-orange-200 text-6xl font-serif leading-none opacity-50'>&ldquo;</div>
                  
                  {/* Stars */}
                  <div className='flex gap-1 mb-2 relative z-10'>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                    <Star className='h-6 w-6 text-yellow-400 fill-yellow-400 drop-shadow-md'/>
                  </div>
                  
                  {/* Review Text */}
                  <div className='text-lg leading-relaxed text-gray-700 relative z-10'>
                    <p className='font-medium'>
                      &quot;The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and{' '}
                      <span className='relative inline-block'>
                        <span className='px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg shadow-md'>
                          the image is super clear
                        </span>
                      </span>
                      , on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.&quot;
                    </p>
                  </div>
                  
                  {/* User Info */}
                  <div className='flex gap-4 mt-auto pt-4 border-t border-gray-100 relative z-10'>
                    <div className='relative'>
                      <Image className='rounded-full h-14 w-14 object-cover ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all' src={User1} alt='Jonathan - Happy Customer'/>
                      <div className='absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white'>
                        <Check className='h-3 w-3 text-white stroke-[3px]'/>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <p className='font-bold text-gray-900 text-lg'>Jonathan</p>
                      <p className='text-sm text-gray-500 font-medium'>Verified Purchase</p>
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
      <section className='relative bg-gradient-to-b from-white via-slate-50 to-white py-24 overflow-hidden'>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <MaxWidthWrapper className='py-12 relative z-10'>
            {/* Section Header - Enhanced */}
            <div className='mb-20 px-6 lg:px-8'>
              <div className='mx-auto max-w-4xl text-center space-y-6'>
                {/* Badge */}
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-green-100 border-2 border-green-300 rounded-full'>
                  <Zap className='h-4 w-4 text-green-600' />
                  <span className='text-sm font-bold text-green-700'>Easy 3-Step Process</span>
                </div>

                {/* Main Heading */}
                <h2 className='tracking-tight text-center text-balance !leading-[1.1] font-black text-5xl md:text-6xl lg:text-7xl text-gray-900'>
                  Upload your photo and get{' '}
                  <span className='relative inline-block group'>
                    <span className='absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity'></span>
                    <span className='relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-2xl shadow-2xl inline-block transform hover:scale-105 transition-transform'>
                      your own case
                    </span>
                  </span>{' '}
                  now
                </h2>

                {/* Subheading */}
                <p className='mt-6 text-xl lg:text-2xl text-gray-600 font-medium max-w-2xl mx-auto'>
                  Transform your favorite memories into a stunning phone case in{' '}
                  <span className='font-bold text-gray-900 bg-green-100 px-2 py-1 rounded'>less than 3 minutes</span>
                </p>
              </div>
            </div>

            {/* Before/After Showcase - Enhanced */}
            <div className='mx-auto max-w-6xl px-6 lg:px-8 mb-20'>
              <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-32 md:gap-40'>
                {/* Animated Arrow */}
                <div className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-20 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'>
                  <Image src={Arrow} alt='Transformation arrow' className='w-16 md:w-20 opacity-60 animate-pulse'/>
                </div>
                
                {/* Original Image - Enhanced */}
                <div className='relative h-96 md:h-[28rem] w-full md:justify-self-end max-w-sm group'>
                  <div className='absolute -inset-2 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl blur opacity-50'></div>
                  <div className='relative h-full rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 ring-4 ring-white shadow-2xl overflow-hidden'>
                    <Image src={HorseImg} alt='Your Original Photo' className='rounded-3xl object-cover h-full w-full group-hover:scale-110 transition-transform duration-700'/>
                    
                    {/* Badge */}
                    <div className='absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border-2 border-gray-200'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
                      <span className='text-sm font-bold text-gray-800'>Step 1: Upload</span>
                    </div>

                    {/* Overlay effect */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </div>
                </div>

                {/* Final Product - Enhanced */}
                <div className='relative group'>
                  {/* Glow Effect */}
                  <div className='absolute -inset-8 bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 rounded-[5rem] opacity-30 blur-3xl group-hover:opacity-50 transition-opacity animate-pulse'/>
                  
                  {/* Phone */}
                  <div className='relative'>
                    <Phone className='w-72 relative hover:scale-110 transition-transform duration-700' imgSrc={HorseMobileCover}/>
                    
                    {/* Success Badge */}
                    <div className='absolute -top-4 -right-4 flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 rounded-full shadow-2xl border-4 border-white animate-in zoom-in-95 duration-500 delay-300'>
                      <Check className='h-5 w-5 stroke-[3px]'/>
                      <span className='font-bold'>Done!</span>
                    </div>
                    
                    {/* Step Badge */}
                    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border-2 border-green-200 opacity-0 group-hover:opacity-100 transition-opacity'>
                      <span className='text-sm font-bold text-gray-800'>Step 3: Enjoy!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid - Redesigned */}
            <div className='mx-auto max-w-5xl px-6 lg:px-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
                {[
                  { icon: Shield, color: 'from-blue-400 to-indigo-500', text: 'High-quality silicone material', highlight: 'Premium Protection' },
                  { icon: Sparkles, color: 'from-purple-400 to-pink-500', text: 'Scratch & fingerprint resistant', highlight: 'Crystal Clear' },
                  { icon: Zap, color: 'from-yellow-400 to-orange-500', text: 'Wireless charging compatible', highlight: 'Smart Design' },
                  { icon: Award, color: 'from-green-400 to-emerald-500', text: '5-year print warranty', highlight: 'Quality Guarantee' },
                ].map((feature, idx) => (
                  <div key={idx} className='group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200 hover:-translate-y-1'>
                    <div className='flex items-center gap-4'>
                      <div className={`flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <feature.icon className='h-7 w-7 text-white'/>
                      </div>
                      <div className='flex-1'>
                        <p className='font-bold text-gray-900 text-lg mb-1'>{feature.highlight}</p>
                        <p className='text-gray-600 text-sm font-medium'>{feature.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final CTA Button - Enhanced */}
              <div className='flex flex-col items-center gap-4 sm:gap-6 pt-6 sm:pt-8 px-4'>
                <Link 
                  href='/configure/upload'
                  className='group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-black text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 active:scale-95 sm:hover:scale-105 overflow-hidden touch-manipulation'
                >
                  <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                  <Sparkles className='relative h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-pulse flex-shrink-0' />
                  <span className='relative'>Create Your Case Now</span>
                  <ArrowRight className='relative h-5 w-5 sm:h-6 sm:w-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform flex-shrink-0' />
                </Link>
                
                <p className='text-xs sm:text-sm text-gray-500 font-medium flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center'>
                  <span className='flex items-center gap-1.5'>
                    <Shield className='h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0' />
                    <span>30-day money-back guarantee</span>
                  </span>
                  <span className='hidden sm:inline'>•</span>
                  <span>Free shipping over $50</span>
                </p>
              </div>
            </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
