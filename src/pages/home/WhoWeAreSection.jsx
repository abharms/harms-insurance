import { AnimatedOnScroll } from "react-animated-css-onscroll";

function WhoWeAreSection() {
    return (
        <div className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 flex bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5">
            <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1900" className='lg:col-start-2 xl:col-start-2  text-9xl text-blue-600 font-semibold'>
                <h1>about<span className='text-black'>.</span></h1>
            </AnimatedOnScroll>

            <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1800" className="mt-10 xl:mt-0   lg:col-start-7 xl:col-start-6 col-span-6 text-4xl ">
                <p className='font-semibold'>We offer the best value in auto, home, life, and commercial insurance</p>
                <div className='text-2xl text-gray-500 mt-5'>
                    <p>Harms Insurance is an independent agency serving Western Oklahoma since 1993.</p>
                    <p className='mt-4'>We offer personalized coverage written with reputable companies who provide excellent claims service.</p>
                    <p className='mt-4 mb-10'>We look forward to visiting with you!</p>
                    <button className="btn btn-outline text-xl">About Us</button>
                </div>
            </AnimatedOnScroll>
        </div>
    )
}

export default WhoWeAreSection