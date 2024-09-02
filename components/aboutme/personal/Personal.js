import React, { useState } from 'react';
import { MdArrowDropDown, MdOutlineArrowRight, MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { useFile } from '@/components/FileContext';

const Personal = () =>
{
    const [open, setOpen] = useState(true);
    const [bioOpen, setBioOpen] = useState(false);
    const [educationOpen, setEducationOpen] = useState(false);

    const { openFile } = useFile();

    const handleEducationToggle = () =>
    {
        setEducationOpen(!educationOpen);
    };

    const handleBioToggle = () =>
    {
        setBioOpen(!bioOpen);
    };

    const handleToggle = () =>
    {
        setOpen(!open);
        if (bioOpen) setBioOpen(false);
        if (educationOpen) setEducationOpen(false);
    };

    return (
        <div className='select-none text-sm'>
            <div className='lg:border-b border-borderColor flex items-center h-9 pl-8 lg:pl-5'>
                <div className='flex items-center hover:cursor-pointer' onClick={handleToggle}>
                    {open ? <MdArrowDropDown size={24} /> : <MdOutlineArrowRight size={24} />}
                    <p className='text-sm'>personal-info</p>
                </div>
            </div>
            {/* BIO */}
            <div>
                {open &&
                    <div className='ssm:pl-14 lg:pl-7 sm:mt-2'>
                        <div className='flex items-center text-primary hover:text-white hover:cursor-pointer w-fit space-x-2 text-sm' onClick={handleBioToggle}>
                            {bioOpen ? <MdKeyboardArrowDown size={14} /> : <MdKeyboardArrowRight size={14} />}
                            {bioOpen ? <FaFolderOpen color='#E99287' size={14} /> : <FaFolder size={14} color='#E99287' />}
                            <p>Bio</p>
                        </div>
                    </div>
                }
                {bioOpen &&
                    <div
                        className='ssm:ml-20 sm:ml-14 mt-1 flex items-center space-x-1 text-sm text-primary hover:text-white w-fit hover:cursor-pointer'
                        onClick={() => openFile('Bio.js')}
                    >
                        <RiJavascriptFill color='#f0db4f' />
                        <p>Bio.js</p>
                    </div>
                }
            </div>
            {/* EDUCATION */}
            <div>
                {open &&
                    <div className='ssm:pl-14 lg:pl-7 sm:mt-2'>
                        <div className='flex items-center text-primary hover:text-white hover:cursor-pointer w-fit space-x-2 text-sm' onClick={handleEducationToggle}>
                            {educationOpen ? <MdKeyboardArrowDown size={14} /> : <MdKeyboardArrowRight size={14} />}
                            {educationOpen ? <FaFolderOpen color='#3A49A4' size={14} /> : <FaFolder size={14} color='#3A49A4' />}
                            <p>Education</p>
                        </div>
                    </div>
                }
                {educationOpen &&
                    <div
                        className='ssm:ml-20 sm:ml-14 mt-1 flex items-center space-x-1 text-sm text-primary hover:text-white w-fit hover:cursor-pointer'
                        onClick={() => openFile('AUL.js')}
                    >
                        <RiJavascriptFill color='#f0db4f' />
                        <p>AUL.js</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Personal;