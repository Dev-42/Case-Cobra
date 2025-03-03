import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async() => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    // console.log(isAdmin)
  return (
    <nav className='z-1000 sticky h-[4.5rem] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-[4.5rem] items-center justify-between border-zinc-200 z-1000'>
                <Link href="/" className='flex z-40 font-semibold'>
                    case<span className='bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent'>Craft</span>
                </Link>
                <div className='h-full flex items-center space-x-4'>
                    {user ? (
                        <>
                            <Link href='/api/auth/logout' className={buttonVariants({size:'sm',variant:'ghost'})}>
                               Sign out 
                            </Link>
                            {isAdmin ? (
                            <Link href='/api/auth/logout' className={buttonVariants({size:'sm',variant:'ghost'})}>
                               Dashboard ✨
                            </Link>
                            ) : null}
                            <Link href='/configure/upload' className={buttonVariants({size:'sm',className:"hidden sm:flex items-center gap-1"})}>
                               Create case 
                               <ArrowRight className='ml-1.5 h-5 w-5'/>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href='/api/auth/register' className={buttonVariants({size:'sm',variant:'ghost'})}>
                               Sign in 
                            </Link>
                            <Link href='/api/auth/login' className={buttonVariants({size:'sm',variant:'ghost'})}>
                               Login
                            </Link>
                            {/* Seperator */}
                            <div className='h-8 w-px bg-zinc-200 hidden sm:block'/>
                            <Link href='/configure/upload' className={buttonVariants({size:'sm',className:"hidden sm:flex items-center gap-1"})}>
                               Create case 
                               <ArrowRight className='ml-1.5 h-5 w-5'/>
                            </Link>
                        </>
                    )}    
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
