import React from 'react'
import { BsGithub, BsTwitterX, BsWhatsapp } from 'react-icons/bs'

const Footer = () =>
{
    return (
        <div className="text-primary border-borderColor border-t w-full absolute bottom-0 left-0 bg-bgColor z-50">
            <div className="flex ssm:justify-around ssssm:justify-between">
                <div className="flex items-center h-14">
                    <p className="ssm:w-32 ssssm:w-44 2xl:w-48 3xl:w-56 border-r border-borderColor h-full flex items-center justify-center">
                        Find me in:
                    </p>
                    <div className="border-r border-borderColor flex items-center justify-center h-full ssm:w-12 ssssm:w-14">
                        <BsTwitterX />
                    </div>
                    <div className="border-r border-borderColor flex items-center justify-center h-full ssm:w-12 ssssm:w-14">
                        <BsWhatsapp />
                    </div>
                </div>
                <div className="flex items-center justify-center sssm:w-40 ssssm:w-48 space-x-3 border-borderColor ssssm:border-l">
                    <p>@vicktor349</p>
                    <BsGithub />
                </div>
            </div>
        </div>
    );
};

export default Footer;