import Link from 'next/link';
import React from 'react'
import { BsGithub, BsTwitterX, BsWhatsapp } from 'react-icons/bs'

const Footer = () =>
{
    return (
        <div className="text-primary border-borderColor border-t w-full bottom-0 left-0 bg-bgColor z-50">
            <div className="flex ssm:justify-around ssssm:justify-between">
                <div className="flex items-center h-14">
                    <p className="ssm:w-32 ssssm:w-44 2xl:w-48 3xl:w-56 border-r border-borderColor h-full flex items-center justify-center">
                        Find me in:
                    </p>
                    <Link href="https://x.com/victoh349" target="_blank" rel="noopener noreferrer" className="border-r border-borderColor flex items-center justify-center h-full ssm:w-12 ssssm:w-14">
                        <BsTwitterX />
                    </Link>
                    <Link href="https://wa.me/08154552075" target="_blank" rel="noopener noreferrer" className="border-r border-borderColor flex items-center justify-center h-full ssm:w-12 ssssm:w-14">
                        <BsWhatsapp />
                    </Link>
                </div>
                <div className="flex items-center justify-center sssm:w-40 ssssm:w-48 space-x-3 border-borderColor ssssm:border-l">
                    <Link href="https://github.com/vicktor349" target="_blank" rel="noopener noreferrer">@vicktor349</Link>
                    <BsGithub />
                </div>
            </div>
        </div>
    );
};

export default Footer;