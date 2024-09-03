import React, { useState } from 'react';
import AboutContent from '@/components/aboutme/AboutContent';
import AboutDisplay from '@/components/aboutme/AboutDisplay';
import Hobbies from '@/components/aboutme/Hobbies/Hobbies';
import Personal from '@/components/aboutme/personal/Personal';
import Professional from '@/components/aboutme/Professional/Professional';
import SideNavbar from '@/components/aboutme/SideNavbar';
import { useRouter } from 'next/router';
import CodeSnippet from '@/components/aboutme/CodeSnippet ';


const aboutme = () =>
{
    const router = useRouter()
    const [activeComponent, setActiveComponent] = useState("Personal");


    const handleSetActiveComponent = (component) =>
    {
        setActiveComponent(component);
    };

    const renderComponent = () =>
    {
        switch (activeComponent)
        {
            case "Personal":
                return <Personal setActiveComponent={handleSetActiveComponent} />
            case "Professional":
                return <Professional setActiveComponent={handleSetActiveComponent} />
            case "Hobbies":
                return <Hobbies setActiveComponent={handleSetActiveComponent} />
        }
    };

    return (
        <div className="lg:flex lg:h-[calc(100vh-56.19px)] text-primary">
            <div className='pt-[59.19px] border-borderColor border-b w-full flex items-center h-32 text-white pl-8 lg:hidden text-sm ssssm:text-base'>
                <p>_about-me</p>
            </div>
            <div className="lg:h-full">
                <SideNavbar activeComponent={activeComponent} setActiveComponent={handleSetActiveComponent} />
            </div>
            <div className="lg:flex-2 lg:flex items-center lg:justify-center space-y-1">
                <AboutContent renderComponent={renderComponent} />
            </div>
            <div className='flex-2'>
                <AboutDisplay />
            </div>
            <div className='flex-1 mt-[94.2px] '>
                <CodeSnippet />
            </div>
        </div>
    );
};

export default aboutme;