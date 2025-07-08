'use client';

import {React, useRef} from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { useEffect } from 'react';

const HeroSection = () => {
 
    const imageRef=useRef(null);

    useEffect(() => {

        const imageElement = imageRef.current;

        const handleScroll = () => {

        const scrollPosition = window.scrollY;
        const scrollThreshold = 100; 

        if(scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");

        }
        else {
            imageElement.classList.remove("scrolled");
        }
    };
        window.addEventListener('scroll', handleScroll);        
        return () => window.removeEventListener('scroll', handleScroll);
    
    }, []);
 
    return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
{/* hero */}
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl x1g:text-8xl gradient-title'>
                    Your AI Career Coach for<br/>
                    Professional Growth
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Advance your career with personalized AI coaching and AI powered tools for job success.
                </p>
            </div>
{/* information */}

            <div className='flex justify-center space-x-4'>
                <Link href='/dashboard'>
                    <Button size='lg' className='mt-2 px-8'>Get Started</Button>
                </Link>
                <Link href='/learn-more'>
                    <Button size='lg' className='mt-2 px-8' variant='outline'>Learn More</Button>
                </Link>
            </div>
{/* image */}
            <div className='hero-image-wrapper mt-5 md:mt-0'>
                <div ref={imageRef} className='hero-image'>
                    <Image
                        src="/proaximo_bg.png"
                        alt="Hero Image"
                        width={1120}
                        height={610}
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  );
};
export default HeroSection;