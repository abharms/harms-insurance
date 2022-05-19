import { useParallax } from 'react-scroll-parallax';
import Navbar from './Navbar';

function AboutHeader() {
    // const parallax = useParallax({
    //     speed: -40,
    // });

    return (
        <div id="wrapper" className='about-header-bg'>
            <div className="relative grid grid-cols-6 gap-4 place-content-evenly  flex relative z-10">
                <Navbar />
                <div className='col-start-2 col-span-4 text-center mt-48'>
                    <h1 className='mt-28 md:mt-0 text-7xl md:text-8xl text-white'>Who We Are</h1>
                </div>

            </div>
            <div className='grid grid-cols-6 gap-4 relative'>
                <div className='col-start-2 h-px bg-white w-80 absolute bottom-4'></div>
                <p className='col-start-3 text-center col-span-2 text-2xl text-white mt-6'>We provide personal service</p>
                <div className='col-start-5 h-px bg-white w-80 absolute bottom-4 -left-20'></div>
            </div>

        </div>
    )
}

export default AboutHeader