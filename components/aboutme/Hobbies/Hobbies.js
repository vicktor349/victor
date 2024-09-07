import { useFile } from '@/components/FileContext';
import React, { useState } from 'react'
import { MdArrowDropDown, MdOutlineArrowRight } from 'react-icons/md'
import { IoIosMusicalNotes } from "react-icons/io";
import { RiMovie2Line } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";

const Hobbies = () =>
{
    const [open, setOpen] = useState(true)

    const { openFile } = useFile();

    const handleToggle = () =>
    {
        setOpen(!open)
    }
    return (
        <div className='select-none'>
            <div className='lg:border-b border-borderColor flex items-center h-9 pl-8 lg:pl-5 text-sm ssssm:text-base'>
                <div className='flex items-center hover:cursor-pointer' onClick={handleToggle}>
                    {open ? <MdArrowDropDown size={24} /> : <MdOutlineArrowRight size={24} />}
                    <p className='text-sm'>Hobbies</p>
                </div>
            </div>
            {open &&
                <div className='space-y-3'>
                    <div onClick={() => openFile('Gaming.js')} className='ml-10 mt-1 flex items-center space-x-1 text-sm text-primary hover:text-white w-fit hover:cursor-pointer'>
                        <IoLogoGameControllerB color='#607B96 ' />
                        <p>Gaming</p>
                    </div>
                    <div onClick={() => openFile('Anime.js')} className='ml-10 mt-1 flex items-center space-x-1 text-sm text-primary hover:text-white w-fit hover:cursor-pointer'>
                        <RiMovie2Line color='#607B96 ' />
                        <p>Anime</p>
                    </div>
                    <div onClick={() => openFile('Music.js')} className='ml-10 mt-1 flex items-center space-x-1 text-sm text-primary hover:text-white w-fit hover:cursor-pointer'>
                        <IoIosMusicalNotes color='#607B96 ' />
                        <p>Music</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Hobbies