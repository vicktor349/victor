import React from 'react'
import GitHubLineSnippet from '../GitHubLineSnippet'

const CodeSnippet = () =>
{
    return (
        <div className='border-t border-borderColor text-sm pt-8'>
            <div className='w-full grid mx-auto px-10 pb-10 lg:pb-0'>
                <p className="font-bold">Hit play and let the rhythm of creativity guide you through my portfolio.</p>
                <iframe src="https://open.spotify.com/embed/playlist/6V4siH7uJC3R19AFH8R4kr?utm_source=generator&theme=0"
                    width="100%" height="450"
                    frameBorder="0" allowFullScreen=""
                    className="mt-6"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default CodeSnippet 