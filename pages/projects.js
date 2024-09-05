import React, { useState } from 'react'
import { MdArrowDropDown, MdOutlineArrowRight } from 'react-icons/md'
import { Checkbox } from '@mantine/core';
import { RiNextjsFill } from 'react-icons/ri';
import ProjectCard from '@/components/projects/ProjectCard';

const project = () =>
{
    const [open, setIsOpen] = useState(true)
    const [checked, setChecked] = useState(true)
    const handleToggle = () =>
    {
        setIsOpen(!open)
    }
    return (
        <div className="lg:pt-[56.5px] text-primary lg:flex">
            <div className="select-none lg:border-r border-borderColor lg:h-screen w-full lg:bg-transparent text-white lg:w-56 xl:w-64 2xl:w-72 3xl:w-80">
                <div className='pt-[59.19px] border-borderColor border-b w-full flex items-center h-32 text-white pl-8 lg:hidden text-sm ssssm:text-base'>
                    <p>_projects</p>
                </div>
                <div className='lg:border-b border-borderColor bg-background lg:bg-transparent flex items-center h-9 lg:pl-5 text-sm ssssm:text-base'>
                    <div className='hover:cursor-pointer w-full pl-6 ssssm:pl-16 lg:pl-0' onClick={handleToggle}>
                        <div className="flex items-center">
                            {open ? <MdArrowDropDown size={24} /> : <MdOutlineArrowRight size={24} />}
                            <p className='text-sm'>Projects</p>
                        </div>
                    </div>
                </div>
                {open &&
                    <div className="px-12 ssssm:px-20 lg:pl-10 pt-3 lg:pt-4">
                        <Checkbox
                            defaultChecked
                            disabled
                            className={`${checked ? 'text-white' : 'text-primary'}`}
                            styles={(theme) => ({
                                input: {
                                    backgroundColor: checked ? '#607B96' : 'transparent',
                                    borderColor: '#607B96',
                                },
                                label: {
                                    fontSize: '16px',
                                },
                            })}
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <RiNextjsFill style={{ marginRight: '5px' }} />
                                    NextJs
                                </div>
                            }
                            size="xs"
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                        />
                    </div>
                }
            </div>
            {checked &&
                <div className="w-fit grid gap-y-10 md:grid-cols-2 2xl:gap-y-0 2xl:grid-cols-3 gap-x-10 lg:gap-x-5 xl:gap-x-10 mx-5 sm:px-5 md:px-0 sm:mx-auto pt-20 pb-20 2xl:pb-0">
                    <ProjectCard projectNumber="1" projectName="Admin Dashboard"
                        text="The dashboard displays key metrics, recent orders, and top sales platforms"
                        src={"/images/projects/admindashboard.png"}
                        projectUrl="https://administratordash.vercel.app/"
                    />
                    <ProjectCard projectNumber="2" projectName="Admin Dashboard"
                        text="The dashboard displays key metrics, recent orders, and top sales platforms"
                        src={"/images/projects/admindashboard.png"}
                        projectUrl="https://administratordash.vercel.app/"
                    />
                    <ProjectCard projectNumber="3" projectName="Admin Dashboard"
                        text="The dashboard displays key metrics, recent orders, and top sales platforms"
                        src={"/images/projects/admindashboard.png"}
                        projectUrl="https://administratordash.vercel.app/"
                    />
                    <ProjectCard projectNumber="4" projectName="Admin Dashboard"
                        text="The dashboard displays key metrics, recent orders, and top sales platforms"
                        src={"/images/projects/admindashboard.png"}
                        projectUrl="https://administratordash.vercel.app/"
                    />
                    <ProjectCard projectNumber="5" projectName="Admin Dashboard"
                        text="The dashboard displays key metrics, recent orders, and top sales platforms"
                        src={"/images/projects/admindashboard.png"}
                        projectUrl="https://administratordash.vercel.app/"
                    />
                    <ProjectCard projectNumber="6" projectName="Admin Dashboard"
                        text="The dashboard displays key metrics, recent orders, and top sales platforms"
                        src={"/images/projects/admindashboard.png"}
                        projectUrl="https://administratordash.vercel.app/"
                    />
                </div>
            }
        </div>
    )
}

export default project