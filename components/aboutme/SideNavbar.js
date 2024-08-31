import React from 'react'
import Image from 'next/image'


const SideNavbar = () =>
{
    const menuLists = [
        { location: "personal", icon: "/images/about/personal-info-icon.svg", name: "personal-info" },
        { location: "professional", icon: "/images/about/professional-info-icon.svg", name: "professional-info" },
        { location: "hobbies", icon: "/images/about/hobbies-icon.svg", name: "hobbies" },
    ];
    return (
        <div className='hidden lg:flex flex-col items-center border-r border-borderColor h-full w-16'>
            <div className='pt-20 space-y-10'>
                {menuLists.map((list) => (
                    <div
                        key={list.name}
                        className='text-primary'
                    >
                        <Image
                            src={list.icon}
                            alt={`${list.name} icon`}
                            width={500} height={500}
                            className='h-auto w-auto hover:cursor-pointer fill-primary'
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SideNavbar;