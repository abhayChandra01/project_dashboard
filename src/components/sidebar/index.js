"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useRef, useEffect } from 'react';
import { MdAnalytics } from "react-icons/md"
import dynamic from "next/dynamic";
// import useWindowDimensions from '../Dimensions/windowDimensions';

export default function Sidebar({ showSideBar, setShowSideBar }) {

    const useWindowDimensions = dynamic(() => import("../Dimensions/windowDimensions"), {
        ssr: true,
    });

    const ref = useRef(null)
    const { width } = useWindowDimensions();

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowSideBar(!showSideBar);
        }
    };

    useEffect(() => {
        if (showSideBar) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSideBar]);


    useEffect(() => {
        if (showSideBar && width > 768) {
            setShowSideBar(false)
        }
    }, [width])

    const navItems = [
        {
            label: "Dashboard",
            href: "/",
            icon: <MdAnalytics className="w-6 h-6" />,
        },
        {
            label: "Team",
            href: "/team",
            // icon: <UserGroupIcon className="w-6 h-6" />,
        },
        {
            label: "Projects",
            href: "/projects",
            // icon: <FolderIcon className="w-6 h-6" />,
        },
        {
            label: "Calendar",
            href: "/calendar",
            // icon: <CalendarIcon className="w-6 h-6" />,
        },
    ];

    return (
        <>
            {showSideBar && <div className="fixed inset-0 bg-[#d1c8c800] backdrop-blur-[1px] z-[20] pointer-events-none block md:hidden" />}
            <div
                className={`flex flex-col justify-between bg-indigo-700 text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[calc(100vh)] h-full w-[300px] transition-transform .3s ease-in-out md:-translate-x-0 ${!showSideBar ? "-translate-x-full" : "translate-x-0"}`}
                ref={ref}
            >

                <nav className="md:sticky top-0 md:top-16">
                    {/* nav items */}
                    <div className="font-bold p-2 mx-2 text-lg block md:hidden">My Logo</div>
                    <ul className="py-2 flex flex-col gap-2">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <li
                                    className="text-indigo-100 hover:bg-indigo-900 flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"
                                >
                                    {item.icon} {item.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
                {/* account  */}
                <div className="border-t border-t-indigo-800 p-4">
                    <div className="flex gap-4 items-center">
                        <Image
                            src={
                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            }
                            height={36}
                            width={36}
                            alt="profile image"
                            className="rounded-full"
                        />
                        <div className="flex flex-col ">
                            <span className="text-indigo-50 my-0">Tom Cook</span>
                            <Link href="/" className="text-indigo-200 text-sm">
                                View Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
