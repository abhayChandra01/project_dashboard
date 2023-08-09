"use client"
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React from 'react'
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {

    const path = usePathname()


    return (
        <div className='flex'>
            <div className='absolute w-[250px] transition-all ease-in-out duration-300'>
                {(path !== '/sign-in' && path !== '/sign-up') && <Sidebar />}
            </div>
            <div className='flex flex-col w-full'>
                {(path !== '/sign-in' && path !== '/sign-up') && <Navbar />}
                {children}
            </div>
        </div>
    )
}
