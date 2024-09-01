import React from 'react';

const AboutContent = ({ renderComponent }) =>
{
    return (
        <div className='lg:border-r border-borderColor h-full lg:w-40 xl:w-48 2xl:w-56 3xl:w-64 lg:pt-[59.19px] lg:border-b bg-background w-full lg:bg-transparent text-white'>
            <div>
                <h1>{renderComponent()}</h1>
            </div>
        </div>
    );
};

export default AboutContent;