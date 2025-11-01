import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, Smartphone, User, LayoutDashboard } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async() => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    
  return (
    <nav className='sticky z-50 h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl transition-all shadow-sm'>
        <MaxWidthWrapper>
            <div className='flex h-16 items-center justify-between'>
                {/* Logo Section */}
                <Link href="/" className='flex items-center gap-2 z-40 group'>
                    <div className='flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-md group-hover:shadow-lg transition-all'>
                        <Smartphone className='h-5 w-5 text-white' strokeWidth={2.5}/>
                    </div>
                    <span className='text-xl font-bold tracking-tight'>
                        case<span className='bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent'>Craft</span>
                    </span>
                </Link>

                {/* Navigation Actions */}
                <div className='h-full flex items-center space-x-2 sm:space-x-4'>
                    {user ? (
                        <>
                            {/* User Greeting */}
                            <div className='hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50'>
                                <User className='h-4 w-4 text-gray-600'/>
                                <span className='text-sm font-medium text-gray-700'>
                                    {user.given_name || user.email?.split('@')[0]}
                                </span>
                            </div>

                            {/* Admin Dashboard */}
                            {isAdmin ? (
                                <Link 
                                    href='/dashboard' 
                                    className={buttonVariants({
                                        size:'sm',
                                        variant:'ghost',
                                        className:"hidden sm:flex items-center gap-1.5 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                                    })}
                                >
                                    <LayoutDashboard className='h-4 w-4'/>
                                    <span className='hidden lg:inline'>Dashboard</span>
                                </Link>
                            ) : null}

                            {/* Create Case Button */}
                            <Link 
                                href='/configure/upload' 
                                className={buttonVariants({
                                    size:'sm',
                                    className:"bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white shadow-md hover:shadow-lg transition-all font-semibold"
                                })}
                            >
                                <span className='hidden sm:inline'>Create Case</span>
                                <span className='sm:hidden'>Create</span>
                                <ArrowRight className='ml-1.5 h-4 w-4'/>
                            </Link>

                            {/* Sign Out */}
                            <Link 
                                href='/api/auth/logout' 
                                className={buttonVariants({
                                    size:'sm',
                                    variant:'ghost',
                                    className:"text-gray-600 hover:text-gray-900"
                                })}
                            >
                                Sign out
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* Sign Up */}
                            <Link 
                                href='/api/auth/register' 
                                className={buttonVariants({
                                    size:'sm',
                                    variant:'ghost',
                                    className:"text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                })}
                            >
                                Sign up
                            </Link>

                            {/* Login */}
                            <Link 
                                href='/api/auth/login' 
                                className={buttonVariants({
                                    size:'sm',
                                    variant:'outline',
                                    className:"border-gray-300 hover:border-gray-400"
                                })}
                            >
                                Login
                            </Link>

                            {/* Separator */}
                            <div className='h-8 w-px bg-gray-300 hidden sm:block'/>

                            {/* Create Case CTA */}
                            <Link 
                                href='/configure/upload' 
                                className={buttonVariants({
                                    size:'sm',
                                    className:"hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white shadow-md hover:shadow-lg transition-all font-semibold"
                                })}
                            >
                                Create Case
                                <ArrowRight className='h-4 w-4'/>
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
