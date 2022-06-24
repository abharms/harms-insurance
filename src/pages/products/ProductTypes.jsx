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
                <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12 place-content-evenly mb-10">
                    <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-5 md:col-span-4 mb-10 place-self-center text-5xl text-blue-600 font-semibold '>
                        <h2 >personal lines<span className='text-black'>.</span></h2>
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
                <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12 place-content-evenly mb-10">
                    <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-5 md:col-span-4 place-self-center text-5xl text-blue-600 font-semibold mb-10'>
                        <h3>commercial lines<span className='text-black'>.</span></h3>
                    </AnimatedOnScroll>
                </div>

                <div className='mx-3.5 mt-10 gap-10 grid md:grid-cols-2 xl:grid-cols-5'>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-2 ">
                        <i className="fa-solid fa-building text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Property</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                        <i className="fa-solid fa-car-side text-blue-600 mr-5 text-3xl"></i>
                        <span className='text-2xl'>Auto</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                        <i className="fa-solid fa-screwdriver-wrench text-blue-600 mr-5 text-3xl"></i>
                        <span className='text-2xl'>Tradesman Cover Plus</span>
                    </AnimatedOnScroll>
                </div>

                <div className='mx-3.5 mt-20 gap-10 grid md:grid-cols-2 xl:grid-cols-5'>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-2">
                        <i className="fa-solid fa-briefcase text-blue-600 mr-5 text-3xl"></i>
                        <span className="text-2xl">Business Cover Plus</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                        <i className="fa-solid fa-hand-holding-dollar text-blue-600 mr-5 text-3xl"></i>
                        <span className='text-2xl'>Liability</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                        <i className="fa-solid fa-church text-blue-600 mr-5 text-3xl"></i>
                        <span className='text-2xl'>Church</span>
                    </AnimatedOnScroll>
                </div>
            </div>
        </>
    )
}

export default ProductTypes