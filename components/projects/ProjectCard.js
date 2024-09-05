import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ projectNumber, projectName, src, text, projectUrl }) =>
{
    return (
        <div className="w-full md:w-[350px] h-fit lg:hover:scale-105 lg:transition-transform lg:ease-out cursor-pointer">
            <p className="pb-2">
                <span className="text-secondaryText font-bold">Project {projectNumber}</span>
                <span className="text-primary"> //_{projectName}</span>
            </p>
            <div className="border border-borderColor rounded-3xl overflow-hidden">
                <Image
                    src={src}
                    alt={`${projectName} project image`}
                    height={500}
                    width={500}
                    className="w-full h-48 ssssm:h-64 md:h-36 object-cover"
                />
                <div className="border-t border-borderColor bg-cardBackground p-4">
                    <p className="text-primary text-sm mb-4">{text}</p>
                    <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-white w-fit bg-buttonBackground rounded-lg p-3 block text-center text-sm">
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard