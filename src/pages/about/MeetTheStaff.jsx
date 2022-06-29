import React from 'react'
import carlin from '../../assets/carlin.jpg'
import chavan from '../../assets/chavan.jpg'
import nanette from '../../assets/nanette.jpg'
import wesley from '../../assets/wesley.jpg'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useParallax } from 'react-scroll-parallax';

function MeetTheStaff() {
    const parallaxCarlin = useParallax({
        speed: -8,
    });

    const parallaxChavan = useParallax({
        speed: -8,
    });

    const parallaxNanette = useParallax({
        speed: -8,
    });

    const parallaxWesley = useParallax({
        speed: -8,
    });

    return (
        <>
     

                <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5">
                    <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration="1900" className="lg:col-start-2 xl:col-start-3 lg:col-span-4">
                        <h2 className="card-title text-4xl">Carlin Day</h2>
                        <p className='text-2xl mt-2'>Carlin is the agency Principal and is a licensed producer working with property and casualty as well as life and health.</p>
                        <p className='text-2xl mt-4'>Contact Carlin today to begin working on your insurance needs.</p>
                        <button className="btn btn-outline mt-10"><i className="fa-solid fa-envelope mr-4"></i>Email</button>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1900" className='mx-3.5 gap-10 lg:col-start-7 xl:col-start-8 mt-32 lg:mt-0 relative'>
                        <div className="card w-96 bg-base-100 shadow-xl z-10">
                            <figure><img src={carlin} alt="Carlin Day" /></figure>
                        </div>
                        <div ref={parallaxCarlin.ref} className='h-96 w-96 rounded-2xl bg-blue-600 absolute -top-0 left-16 shadow-xl'>
                            <div className='text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white'>CARLIN</div>
                        </div>
                        
                    </AnimatedOnScroll>
                </section>

                <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5 about-bg">
                    <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration="1900" className='mx-3.5 gap-10 lg:col-start-2 xl:col-start-3'>
                        <div className="card w-96 bg-base-100 shadow-xl z-10">
                            <figure><img src={chavan} alt="Chavan Sampley" /></figure>
                        </div>
                        <div ref={parallaxChavan.ref} className='h-96 w-96 rounded-2xl bg-blue-600 absolute -top-0 left-16 shadow-xl'>
                            <div className='text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white'>CHAVAN</div>
                        </div>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll animationIn="fadeInRight" animationInDuration="1900" className="lg:col-start-7 xl:col-start-8 lg:col-span-4 mt-32 lg:mt-0">
                        <h2 className="card-title text-4xl">Chavan Sampley</h2>
                        <p className='text-2xl mt-2'>Chavan graduated from Southwestern Oklahoma State University with a Bachelor’s of Business Administration in Marketing, and joined the agency in 2022.</p>
                        <p className='text-2xl mt-4'>He is a fully licensed agent helping in all aspects of insurance containing property, casualty, health and life. </p>
                        <p className='text-2xl mt-4'>He looks forward to the opportunity to build relationships and service his clients.</p>
                        <button className="btn btn-outline mt-10"><i className="fa-solid fa-envelope mr-4"></i>Email</button>
                    </AnimatedOnScroll>
                </section>

                <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5">
                    <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration="1900" className="lg:col-start-2 xl:col-start-3 lg:col-span-4">
                        <h2 className="card-title text-4xl">Nanette Zoschke</h2>
                        <p className='text-2xl mt-2'>Nanette helps process changes and service agency business.</p>
                        <button className="btn btn-outline mt-10"><i className="fa-solid fa-envelope mr-4"></i>Email</button>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1900" className='mx-3.5 gap-10 lg:col-start-7 xl:col-start-8 mt-32 lg:mt-0'>
                        <div className="card w-96 bg-base-100 shadow-xl z-10">
                            <figure><img src={nanette} alt="Nanette Zoschke" /></figure>
                        </div>
                        <div ref={parallaxNanette.ref} className='h-96 w-96 rounded-2xl bg-blue-600 absolute -top-0 left-16 shadow-xl'>
                            <div className='text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white'>NANETTE</div>
                        </div>
                    </AnimatedOnScroll>
                </section>

                <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5 about-bg">
                    <AnimatedOnScroll animationIn="fadeInLeft" animationInDuration="1900" className='mx-3.5 gap-10 lg:col-start-2 xl:col-start-3'>
                        <div className="card w-96 bg-base-100 shadow-xl z-10">
                            <figure><img src={wesley} alt="Wesley Javorsky" /></figure>
                        </div>
                        <div ref={parallaxWesley.ref} className='h-96 w-96 rounded-2xl bg-blue-600 absolute top-8 left-16 shadow-xl'>
                            <div className='text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white'>WESLEY</div>
                        </div>
                    </AnimatedOnScroll>

                    <AnimatedOnScroll animationIn="fadeInRight" animationInDuration="1900" className="lg:col-start-7 xl:col-start-8 lg:col-span-4 mt-32 lg:mt-0">
                        <h2 className="card-title text-4xl">Wesley Javorsky</h2>
                        <p className='text-2xl mt-2'>Wesley joined the agency in 2020 bringing experience from banking and agriculture. </p>
                        <p className='text-2xl mt-4'>He is a graduate of Southwestern Oklahoma State University and has Bachelor ’s degrees in finance and accounting.  </p>
                        <p className='text-2xl mt-4'>Wesley is a fully licensed agent working with property and casualty as well as health and life.</p>
                        <p className='text-2xl mt-4'>He is enthusiastic to help meet the needs of clients and provide them with extra peace of mind.</p>
                        <button className="btn btn-outline mt-10"><i className="fa-solid fa-envelope mr-4"></i>Email</button>
                    </AnimatedOnScroll>
                </section>


                {/* <AnimatedOnScroll animationIn="fadeI567ynUp" animationInDuration="1800" className="lg:col-start-2 xl:col-start-2 2xl:col-start-3 mt-10  col-span-6 text-4xl ">
                    <p className='font-semibold'>We offer the best value in auto, home, life, and commercial insurance</p>
                    <div className='text-2xl text-gray-500 mt-5'>
                        <p>The Agency began in the mid-1960’s serving primarily the Mennonite congregations in Western Oklahoma with property and casualty insurance.</p>
                        <p className='mt-4'>Over the years, our clientele has expanded beyond the Mennonite boundaries, but we still base our business on biblical principles and provide the same personal service.</p>
                        <p className='mt-4 mb-10'>We make every effort to get to know our clients so that we can help them understand the coverages they have chosen and be available to help them though the claims process.</p>
                        <div className="btn btn-outline text-xl">Contact Us</div>
                    </div>
                </AnimatedOnScroll>

                <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1900" className='  text-9xl xl:mt-0 lg:col-start-7 xl:col-start-8 text-blue-600 font-semibold'>
                    about us<span className='text-black'>.</span>
                </AnimatedOnScroll> */}
           



        </>
    )
}

export default MeetTheStaff