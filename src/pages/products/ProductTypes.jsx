import { AnimatedOnScroll } from "react-animated-css-onscroll";

function ProductTypes() {
    return (
        <>
            <div className='py-40 bg-white relative z-10'>
                <div className="mx-3.5 grid grid-cols-4 md:grid-cols-12  mb-10">
                    <AnimatedOnScroll animationInDuration="1500" animationIn="fadeInDown" className='col-start-2 col-span-6 place-self-center mt-6 text-2xl'>
                        <p>We offer a wide range of insurance policies. Below are a few examples of personal and commercial offerings. Contact us today for a quote.</p>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='col-span-6 col-start-9 text-8xl text-blue-600 font-semibold '>
                        <h2>what we offer<span className='text-black'>.</span></h2>
                    </AnimatedOnScroll>
                    
                    
                </div>
                <div className='grid grid-cols-12  mt-10'>
                    <button className='col-start-2 col-span-2 btn btn-lg btn-outline '>Contact Us</button>
                </div>
            </div>
            <div className="py-40 about-bg relative z-10">
                {/* <div className="text-center">
                    <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-5 md:col-span-4 place-self-center text-5xl text-blue-600 font-semibold mb-10 '>
                        <h3>personal lines<span className='text-black'>.</span></h3>
                    </AnimatedOnScroll>
                </div>





                <div className='mx-3.5 mt-10 gap-10 grid md:grid-cols-2 xl:grid-cols-4'>
                    <AnimatedOnScroll animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center">
                            <i className="fa-solid fa-bus-simple text-blue-600"></i>
                            <p className='mt-5'>Recreational Vehicle</p>
                        </div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="100" animationIn="fadeInUp " className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center">
                            <i className="fa-solid fa-motorcycle text-blue-600"></i>
                            <p className='mt-5'>Motorcycle/ATV</p>
                        </div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="160" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center">
                            <i className="fa-solid fa-car text-blue-600"></i>
                            <p className='mt-5'>Antique Autos</p>
                        </div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center">
                            <i className="fa-solid fa-umbrella-beach text-blue-600"></i>
                            <p className='mt-5'>Umbrella</p>
                        </div>
                    </AnimatedOnScroll>
                </div>
                <div className='grid grid-cols-5 mt-24'>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 w-full col-start-3 card bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center">
                            <i className="fa-solid fa-heart-pulse text-blue-600"></i>
                            <p className='mt-5'>Life</p>
                        </div>
                    </AnimatedOnScroll>
                </div>
                    */}

                <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12 place-content-evenly mb-10">
                    <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-5 md:col-span-4 mb-10 place-self-center text-5xl text-blue-600 font-semibold '>
                        <h2>personal lines<span className='text-black'>.</span></h2>
                    </AnimatedOnScroll>
                </div>
                <div className='mx-20 gap-10 grid md:grid-cols-4'>

                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className=" w-full">
                        <i className="fa-solid fa-house text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Homeowner</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className=" w-full">
                        <i className="fa-solid fa-car-side text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Auto</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className=" w-full">
                        <i className="fa-solid fa-tractor text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Farm</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className=" w-full">
                        <i className="fa-solid fa-caravan  text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Mobile Homeowners</span>
                    </AnimatedOnScroll>
                </div>

                <div className='mx-20 mt-20 gap-10 grid md:grid-cols-4'>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className=" w-full">
                        <i className="fa-solid fa-house-chimney-user text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Rental Dwellings</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className=" w-full">
                        <i className="fa-solid fa-truck-fast text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Inland Marine</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className=" w-full">
                        <i className="fa-solid fa-sailboat text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Boat/Watercraft</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                        <i className="fa-solid fa-house-flood-water text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Flood</span>
                    </AnimatedOnScroll>
                </div>
            </div>



            <div className="py-40 bg-white relative z-10 mb-96">
                <div className="text-center">
                    <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-5 md:col-span-4 place-self-center text-5xl text-blue-600 font-semibold mb-10 '>
                        <h3>commercial lines<span className='text-black'>.</span></h3>
                    </AnimatedOnScroll>
                </div>

                <div className='mx-3.5 mt-10 gap-10 grid md:grid-cols-2 xl:grid-cols-3'>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center bg-white">
                            <i className="fa-solid fa-building text-blue-600"></i>
                            <p className='mt-5'>Property</p>
                        </div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center bg-white">
                            <i className="fa-solid fa-car-side text-blue-600"></i>
                            <p className='mt-5'>Auto</p>
                        </div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center bg-white">
                            <i className="fa-solid fa-screwdriver-wrench text-blue-600"></i>
                            <p className='mt-5'>Tradesman Cover Plus</p>
                        </div>
                    </AnimatedOnScroll>
                </div>

                <div className='mx-3.5 mt-10 gap-10 grid md:grid-cols-2 xl:grid-cols-3'>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center bg-white">
                            <i className="fa-solid fa-briefcase text-blue-600"></i>
                            <p className='mt-5'>Business Cover Plus</p>
                        </div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center bg-white">
                            <i className="fa-solid fa-hand-holding-dollar text-blue-600"></i>
                            <p className='mt-5'>Liability</p>
                        </div>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
                        <div className="card-body text-4xl xl:text-2xl 2xl:text-4xl text-center bg-white">
                            <i className="fa-solid fa-church text-blue-600"></i>
                            <p className='mt-5'>Church</p>
                        </div>
                    </AnimatedOnScroll>
                </div>
            </div>
        </>
    )
}

export default ProductTypes