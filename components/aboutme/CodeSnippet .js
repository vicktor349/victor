import React from 'react'
import GitHubLineSnippet from '../GitHubLineSnippet'

const CodeSnippet = () =>
{
    return (
        <div className='border-t border-borderColor text-sm pt-8'>
            <div className='w-fit grid mx-auto'>
                <p>// Code Snippet showcase</p>
                <div className='border-borderColor rounded-xl w-fit border mt-10'>
                    <GitHubLineSnippet
                        owner="vicktor349"
                        repo="nestmart"
                        filePath="components/CartContext.js"
                        startLine={23}
                        endLine={36}
                    />
                </div>
                <div className='border-borderColor rounded-xl w-fit border mt-10'>
                    <GitHubLineSnippet
                        owner="vicktor349"
                        repo="nestmart"
                        filePath="components/CartContext.js"
                        startLine={23}
                        endLine={36}
                    />
                </div>
            </div>
        </div>
    )
}

export default CodeSnippet 