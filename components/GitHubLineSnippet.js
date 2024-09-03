import React, { useEffect, useState } from 'react';
require('dotenv').config();

const keywords = new Set([
    'const', 'if', 'return'
]);
const customWords = new Set([
    // '(', , ')', ';', '=', '.', '+', ':'
    'product', 'prevItems', 'existingItem', 'item'
]);

const highlightCode = (code) =>
{
    return code
        .split(/\n/)
        .map(line =>
        {
            return line.split(/\b/)
                .map(part =>
                {
                    if (keywords.has(part))
                    {
                        return `<span class="keyword">${part}</span>`;
                    } else if (customWords.has(part))
                    {
                        return `<span class="custom-word">${part}</span>`;
                    } else
                    {
                        return part;
                    }
                })
                .join('');
        })
        .join('\n');
};

function GitHubLineSnippet({ owner, repo, filePath, startLine, endLine })
{
    const [linesContent, setLinesContent] = useState('');
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    useEffect(() =>
    {
        async function fetchFileContent()
        {
            if (!token)
            {
                console.error('GitHub token is not defined.');
                return;
            }

            const url = `https://api.github.com/repos/${owner}/${repo}/contents${filePath}`;
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github.v3.raw',
                },
            });

            if (response.ok)
            {
                const fileText = await response.text();
                const lines = fileText.split('\n');

                const start = Math.max(startLine - 1, 0);
                const end = Math.min(endLine, lines.length);

                if (start < end)
                {
                    const snippetLines = lines.slice(start, end).join('\n');
                    const highlightedCode = highlightCode(snippetLines);
                    setLinesContent(highlightedCode);
                } else
                {
                    console.error('Invalid line range');
                }
            } else
            {
                console.error('Failed to fetch file content:', response.statusText);
            }
        }

        fetchFileContent();
    }, [owner, repo, filePath, startLine, endLine, token]);

    return (
        <div className='ssm:w-[20rem] sssm:w-[21rem] ssssm:w-[26rem] sm:w-[35rem] md:w-fit lg:w-[22rem] xl:w-[25rem] 2xl:w-[34rem] 3xl:w-[42rem]'>
            <pre className='text-[0.75rem] px-5 py-3 select-none hover:cursor-text text-[#5565E8] w-full max-w-full overflow-x-auto'>
                <code dangerouslySetInnerHTML={{ __html: linesContent }} className='w-full max-w-full break-words' />
            </pre>
        </div>

    );
}

export default GitHubLineSnippet;
