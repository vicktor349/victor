import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { IoIosClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/router';

const Navbar = () =>  
{
    const [isOpened, setIsOpened] = useState(false)
    const navlinks = [
        { id: 1, name: "_hello", link: "/" },
        { id: 2, name: "_about-me", link: "/about-me" },
        { id: 3, name: "_projects", link: "/projects" },
        { id: 4, name: "_contact-me", link: "/contact-me" },
    ]
    const handleMenuToggle = () =>
    {
        setIsOpened(!isOpened)
    }
    const { pathname } = useRouter()
    const activeColor = (p) => pathname === p ? "#fff" : "#607B96"
    return (
        <>
            <Head>
                <title>Layomi | Home</title>
            </Head>
            <div className="text-primary border-borderColor border-b border-solid h-[56.19px] flex items-center fixed w-full text-sm bg-bgColor z-[9999999]">
                <div className="flex items-center w-full justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center md:w-48 lg:w-56 xl:w-64 2xl:w-72 3xl:w-80 h-14 md:border-borderColor md:border-r md:border-solid">
                            <Link href="/" className="ml-5">segun-victor</Link>
                        </div>
                        <div className="hidden md:flex items-center">
                            {navlinks.slice(0, 3).map((navlink) => (
                                <div key={navlink.id} className="border-borderColor border-r w-fit px-6 h-14 flex items-center" style={{ borderBottom: pathname === navlink.link ? "2px solid #FEA55F" : "none" }}>
                                    <Link
                                        style={{ color: activeColor(navlink.link) }}
                                        className="hover:text-white" href={navlink.link}>
                                        {navlink.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <div key={navlinks[3].id} className="border-borderColor border-l w-fit px-5 h-14 flex items-center">
                            <Link className="hover:text-white" href={navlinks[3].link}>{navlinks[3].name}</Link>
                        </div>
                    </div>
                    <div className="mx-5 flex justify-center items-center md:hidden">
                        {isOpened ? (
                            <IoIosClose
                                size={32}
                                onClick={handleMenuToggle}
                                className="hover:cursor-pointer"
                            />
                        ) : (
                            <RxHamburgerMenu
                                size={24}
                                onClick={handleMenuToggle}
                                className="hover:cursor-pointer"
                            />
                        )}
                    </div>
                </div>
                {/* MOBILE DRAWER */}
                {
                    isOpened && (
                        <div className="absolute top-14 w-full bg-bgColor h-screen z-[999999]">
                            {navlinks.map((navlink) => (
                                <div key={navlink.id}>
                                    <div className="border-borderColor border-b py-4">
                                        <Link className="text-white ml-5" onClick={handleMenuToggle} href={navlink.link}>{navlink.name}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar