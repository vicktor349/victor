import React from 'react'
import Image from 'next/image'


const SideNavbar = ({ setActiveComponent }) =>
{
    const menuLists = [
        { location: "Personal", icon: "/images/about/personal-info-icon.svg" },
        { location: "Professional", icon: "/images/about/professional-info-icon.svg", },
        { location: "Hobbies", icon: "/images/about/hobbies-icon.svg", },
    ];
    return (
        <div className='lg:flex lg:flex-col items-center lg:border-r border-borderColor lg:h-full lg:w-16'>
            <div className='lg:pt-20 lg:space-y-10 flex items-center mx-10 h-10 justify-between lg:grid'>
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