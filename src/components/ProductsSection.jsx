import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function ProductsSection() {
    return (
        <div className='py-40 bg-gray-100'>
            <div className="grid grid-cols-12 place-content-evenly mb-10">
                <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='col-start-6 col-span-2 place-self-center text-6xl text-blue-600 font-semibold '>
           
                        products<span className='text-black'>.</span>
                  
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDuration="1500" animationIn="fadeInDown" className='col-start-5 place-self-center text-center col-span-4 mt-6 text-2xl'>
                    <p>As an independent agency, we can offer a range of insurance products, even beyond those listed below.  Contact us today to see how we can help with your insurance needs.</p>
                </AnimatedOnScroll>
            </div>
            <div className='grid grid-cols-4'>
                <AnimatedOnScroll animationIn="fadeInUp" className="card w-96 bg-base-100 shadow-xl place-self-center rounded-2xl">
                    <div className="card-body text-4xl text-center">
                        <i className="fa-solid fa-house text-blue-600"></i>
                        <p className='mt-5'>Home and Auto</p>
                    </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="100" animationIn="fadeInUp " className="card w-96 bg-base-100 shadow-xl place-self-center rounded-2xl">
                    <div className="card-body text-4xl text-center">
                        <i className="fa-solid fa-tractor text-blue-600"></i>
                        <p className='mt-5'>Farm</p>
                    </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="160" animationIn="fadeInUp" className="card w-96 bg-base-100 shadow-xl place-self-center rounded-2xl">
                    <div className="card-body text-4xl text-center">
                        <i className="fa-solid fa-laptop text-blue-600"></i>
                        <p className='mt-5'>Small Business</p>
                    </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="card w-96 bg-base-100 shadow-xl place-self-center rounded-2xl">
                    <div className="card-body text-4xl text-center">
                        <i className="fa-solid fa-people-group text-blue-600"></i>
                        <p className='mt-5'>Life and Health</p>
                    </div>
                </AnimatedOnScroll>   
            </div>
            <div className='grid grid-cols-1 mt-24'>
                <button className='btn btn-lg btn-outline place-self-center '>See All Products</button>
            </div>
            
        </div>
    )
}

export default ProductsSection