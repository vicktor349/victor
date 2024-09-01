import React from 'react'
import Image from 'next/image'


const SideNavbar = ({ activeComponent, setActiveComponent }) =>
{
    const menuLists = [
        { location: "Personal", icon: "/images/about/personal-info-icon.svg" },
        { location: "Professional", icon: "/images/about/professional-info-icon.svg", },
        { location: "Hobbies", icon: "/images/about/hobbies-icon.svg", },
    ];
    return (
        <div className='hidden lg:flex flex-col items-center border-r border-borderColor h-full w-16'>
            <div className='pt-20 space-y-10'>
                {menuLists.map((list) => (
                    <div
                        key={list.location}
                        className='text-primary'
                        onClick={() => setActiveComponent(list.location)}
                    >
                        <Image
                            src={list.icon}
                            alt={`${list.location} icon`}
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