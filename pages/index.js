import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ReactTyped } from 'react-typed'

export default function Home()
{
  return (
    <main>
      <div className="flex items-center justify-center h-[calc(100vh-56.19px)]">
        <div className="xl:flex xl:items-center xl:gap-x-32">
          <div className="w-full">
            <div className="space-y-3">
              <p className="text-white">Hi all. I am</p>
              <p className="text-white text-3xl sm:text-4xl 2xl:text-5xl">Segun-Fatolu Layomi</p>
              <p className="text-secondary text-2xl sm:text-3xl 2xl:text-4xl">&gt; <ReactTyped loop strings={["Front-end developer", "Anime Enthusiast", "Game Lover", "Music Lover"]} typeSpeed={40} /></p>
            </div>
            <div className="mt-10">
              <Link target="_blank" href="https://docs.google.com/document/d/1JYuWmyvh0xkOqTAWcDgO58qiWugGJ-G6yAyUnGuUN2s/edit?usp=sharing" className="px-6 py-4 font-medium bg-buttonBackground text-white w-fit transition-all shadow-[5px_5px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                View Resume
              </Link>
            </div>
            <section className="space-y-3 mt-16">
              <p className="text-primary  hidden ssssm:block">// complete the game to continue</p>
              <p className="text-primary  hidden ssssm:block">// you can also see it on my Github page</p>
              <p className="ssm:text-[0.7rem] sssm:text-[0.75rem] ssssm:text-sm sm:text-base">
                <span className="text-secondary">const </span>
                <span className="text-accent">githubLink </span>
                <span className="text-white">= </span>
                <span className="text-secondaryAccent underline hover:cursor-pointer">“https://github.com/example/url”</span>
              </p>
            </section>
          </div>
          <div className="relative select-none h-full hidden xl:flex">
            <div>
              <Image
                className="absolute inset-0 transform scale-150 object-cover"
                src="/images/background-gradient.png"
                alt="Gradient Image"
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="relative xl:h-[375px] xl:w-[410px] 2xl:h-[475px] 2xl:w-[510px] border border-borderColor  flex items-center justify-center">
                {/* Snake Game goes here */}
                <video autoPlay loop muted playsInline className="w-96 h-96 object-contain">
                  <source src="/images/coming.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
