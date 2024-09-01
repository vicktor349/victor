import React from 'react'

const AboutDisplay = () =>
{
    return (
        <div className='lg:w-[25rem] xl:w-[35rem] 2xl:w-[45rem] 3xl:w-[50rem] border-r border-borderColor h-full'>
            {/* TAB FOR DISPLAYING FILES OPENED */}
            <div className='border-b border-borderColor text-primary pt-[59.19px] h-[5.95rem] hidden lg:flex items-center'>
                display
            </div>
            {/* CONTENTs BEING DISPLAYED */}
            <div className='mx-8 mt-14 lg:mx-0 lg:mt-0 lg:border-r lg:border-borderColor lg:h-[calc(100%-95px)] lg:w-[23rem] xl:w-[33rem] 2xl:w-[43rem] 3xl:w-[48rem]'>
                display2
            </div>
        </div>
    )
}

export default AboutDisplay