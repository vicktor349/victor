import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useFile } from '../FileContext';

const AboutDisplay = () =>
{
    const { openedFiles, activeFile, openFile, closeFile } = useFile();
    const [components, setComponents] = useState({});

    useEffect(() =>
    {
        openedFiles.forEach((file) =>
        {
            if (!components[file])
            {
                import(`../../data/${file}`)
                    .then((module) =>
                    {
                        setComponents((prev) => ({
                            ...prev,
                            [file]: module.default,
                        }));
                    })
                    .catch((err) =>
                    {
                        console.error('Failed to load the component:', err);
                        setComponents((prev) => ({
                            ...prev,
                            [file]: () => <div>File not found</div>,
                        }));
                    });
            }
        });
    }, [openedFiles]);

    return (
        <div className='lg:w-[25rem] xl:w-[35rem] 2xl:w-[45rem] 3xl:w-[50rem] border-r border-borderColor h-full'>
            {/* TAB FOR DISPLAYING FILES OPENED */}
            <div className='border-b border-borderColor text-primary pt-[59.19px] h-[5.95rem] hidden lg:flex items-center overflow-x-auto'>
                {openedFiles.map((file) => (
                    <div
                        key={file}
                        className={`text-sm flex items-center px-4 py-2 cursor-pointer border-borderColor border-r ${activeFile === file ? 'text-white' : ''}`}
                        onClick={() => openFile(file)}
                    >
                        <span className='select-none'>{file}</span>
                        <IoMdClose size={16} className='ml-2' onClick={(e) => { e.stopPropagation(); closeFile(file); }} />
                    </div>
                ))}
            </div>
            {/* CONTENT BEING DISPLAYED */}
            <div className='mx-5 sm:mx-8 mt-8 md:mt-0 lg:mx-0 lg:mt-0 lg:border-r lg:border-borderColor lg:h-[calc(100%-95px)] lg:w-[23rem] xl:w-[33rem] 2xl:w-[43rem] 3xl:w-[48rem]'>
                <div className='md:pt-8 md:pl-8 ssm:w-full xl:w-[42rem] text-sm leading-7'>
                    {activeFile && components[activeFile] ? React.createElement(components[activeFile]) :
                        <div>
                        /** <br />
                            * No editor open, Click a file to read about me <br />
                            */<br />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutDisplay;
