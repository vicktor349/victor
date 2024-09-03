import React, { useState } from 'react'
import { FaFolder, FaFolderOpen } from 'react-icons/fa'
import { MdArrowDropDown, MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineArrowRight } from 'react-icons/md'
import { RiJavascriptFill } from 'react-icons/ri'
import { useFile } from '@/components/FileContext';

const Professional = () =>
{
    const [open, setOpen] = useState(true)
    const [frontend, setFrontend] = useState(false)
    const { openFile } = useFile();
    const frontEndToggle = () =>
    {
        setFrontend(!frontend)
    }
    const handleToggle = () =>
    {
        setOpen(!open)
        if (frontend === true)
        {
            setFrontend(false)
        }
    }
    return (
        <div className='select-none'>
            <div className='lg:border-b border-borderColor flex items-center h-9 pl-8 lg:pl-5 text-sm ssssm:text-base'>
                <div className='flex items-center hover:cursor-pointer' onClick={handleToggle}>
                    {open ? <MdArrowDropDown size={24} /> : <MdOutlineArrowRight size={24} />}
                    <p className='text-sm'>professional-info</p>
                </div>
            </div>
            <div>
                {open &&
                    <div className='ssm:pl-14 lg:pl-7 sm:mt-2'>
                        <div className='flex items-center text-primary hover:text-white hover:cursor-pointer w-fit space-x-2 text-sm' onClick={frontEndToggle}>
                            {frontend ? <MdKeyboardArrowDown size={14} /> : <MdKeyboardArrowRight size={14} />}
                            {frontend ? <FaFolderOpen color='#E99287' size={14} /> : <FaFolder size={14} color='#E99287' />}
                            <p>frontend</p>
                        </div>
                    </div>
                }
                {frontend &&
                    <div onClick={() => openFile('Next.js')} className='ml-14 mt-1 flex items-center space-x-1 text-sm text-primary hover:text-white w-fit hover:cursor-pointer'>
                        <RiJavascriptFill color='#f0db4f ' />
                        <p>Next.js</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Professional