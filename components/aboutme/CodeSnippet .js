import React from 'react'

const CodeSnippet = () =>
{
    return (
        <div className='border-t border-borderColor text-sm pt-8'>
            <div className='w-full grid mx-auto px-10 pb-10 lg:pb-0'>
                <p className="text-lg font-bold">
                    Hit play and let the <span>rhythm of creativity</span> guide you through my portfolio.
                </p>
                <iframe src="https://open.spotify.com/embed/playlist/6V4siH7uJC3R19AFH8R4kr?utm_source=generator&theme=0"
                    className="mt-6 h-[30rem] w-full">
                </iframe>
            </div>
        </div>
    )
}

export default CodeSnippet 