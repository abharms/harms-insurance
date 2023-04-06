import React from 'react'
import carlin from '../../assets/carlin.jpg'
import chavan from '../../assets/chavan.jpg'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useParallax } from 'react-scroll-parallax';

function MeetTheStaff() {
    const parallaxCarlin = useParallax({
        speed: -8,
    });

    const parallaxChavan = useParallax({
        speed: -8,
    });

    return (
        <>
            <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5">
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration="1900" className="lg:col-start-2 xl:col-start-3 lg:col-span-4">
                    <h2 className="card-title text-4xl">Carlin Day</h2>
                    <p className='text-2xl mt-2'>Carlin is the agency Principal and is a licensed producer working with property and casualty as well as life and health.</p>
                    <p className='text-2xl mt-4'>Contact Carlin today to begin working on your insurance needs.</p>
                    <a href="mailto:carlin@harmsinsuranceok.com" className="btn btn-outline mt-10"><i className="fa-solid fa-envelope mr-4"></i>Email</a>
                </AnimatedOnScroll>

                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1900" className='mx-3.5 gap-10 lg:col-start-7 xl:col-start-8 mt-32 lg:mt-0 relative'>
                    <div className="card lg:w-96 bg-base-100 shadow-xl z-10">
                        <figure><img src={carlin} alt="Carlin Day" /></figure>
                    </div>
                    <div ref={parallaxCarlin.ref} className='absolute rounded-2xl bg-blue-600 shadow-xl lg:h-96 lg:w-96 lg:-top-0 lg:left-16'>
                        <div className='text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white'>CARLIN</div>
                    </div>

                </AnimatedOnScroll>
            </section>

            <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5 about-bg">
                <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration="1900" className='mx-3.5 gap-10 lg:col-start-2 xl:col-start-3'>
                    <div className="card lg:w-96 bg-base-100 shadow-xl z-10">
                        <figure><img src={chavan} alt="Chavan Sampley" /></figure>
                    </div>
                    <div ref={parallaxChavan.ref} className='absolute rounded-2xl bg-blue-600 shadow-xl lg:h-96 lg:w-96 lg:-top-0 lg:left-16'>
                        <div className='text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white'>CHAVAN</div>
                    </div>
                </AnimatedOnScroll>

                <AnimatedOnScroll animationIn="fadeInRight" animationInDuration="1900" className="lg:col-start-7 xl:col-start-8 lg:col-span-4 mt-32 lg:mt-0">
                    <h2 className="card-title text-4xl">Chavan Sampley</h2>
                    <p className='text-2xl mt-2'>Chavan graduated from Southwestern Oklahoma State University with a Bachelor’s of Business Administration in Marketing, and joined the agency in 2022.</p>
                    <p className='text-2xl mt-4'>He is a fully licensed agent helping in all aspects of insurance containing property, casualty, health and life. </p>
                    <p className='text-2xl mt-4'>He looks forward to the opportunity to build relationships and service his clients.</p>
                    <a href="mailto:chavan@harmsinsuranceok.com" className="btn btn-outline mt-10"><i className="fa-solid fa-envelope mr-4"></i>Email</a>
                </AnimatedOnScroll>
            </section>
        </>
    )
}

export default MeetTheStaff