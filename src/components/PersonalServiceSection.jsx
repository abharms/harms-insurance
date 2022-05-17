import personalService from '../assets/personal-service.jpg'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useParallax } from 'react-scroll-parallax';

function PersonalServiceSection() {
    const parallax = useParallax({
        speed: 12,
    });

    return (
        <>
            <div className="grid grid-cols-12 bg-white py-60 relative z-10 mb-96 border border-b">
                <AnimatedOnScroll  animationInDuration="1500" animationIn="fadeInLeft" className='col-start-2 col-end-6'>
                    <h3 className='text-4xl text-blue-600 font-semibold'>our promise to you<span className='text-black'>.</span></h3>
                    <h2 className='text-5xl'>Personal Service</h2>
                    <p className='text-2xl mt-5'>We offer you some of the best values in auto, home, life, and commercial insurance through some of the most respected companies in the nation. We provide personal service for your insurance needs.</p>
                </AnimatedOnScroll>

                <AnimatedOnScroll animationInDelay="50" animationInDuration="1500" animationIn="fadeInRight" className="col-start-8 absolute -top-14 fade-in-duration">
                    <img ref={parallax.ref} className='personal-service-image' src={personalService} alt="Two people talking" />
                    
                </AnimatedOnScroll>
                
            </div>
            {/* <hr className='border-gray-200 drop-shadow-md z-10'></hr> */}
        </>

    )
}

export default PersonalServiceSection