import React from 'react'

export default function Navbar({showSideBar, setShowSideBar }) {
    return (
        <nav
            className="bg-white text-zinc-500 flex items-center w-full fixed z-10 px-4 shadow-sm h-16"
        >
            <div className="font-bold text-lg">My Logo</div>
            <div className="flex-grow"></div> {/** spacer */}
            <button className="md:hidden" onClick={() => setShowSideBar(true)}>
                Open
                {/* <Bars3Icon className="h-6 w-6" /> */}
            </button>
        </nav>
    )
}
