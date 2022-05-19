import { useParallax } from 'react-scroll-parallax';
import Navbar from './Navbar';

function Hero() {

    const parallax = useParallax({
        speed: -40,
    });

    return (
        <div id="wrapper">
            <div id="hero" ref={parallax.ref} className="relative grid grid-cols-6 gap-4 place-content-evenly hero-bg flex relative z-10">
                <Navbar />
                <div className='col-start-2 col-span-4 text-center'>
                    <h1 className='mt-28 md:mt-0 text-5xl md:text-7xl text-white'>We provide personal service for your insurance needs</h1>

                    <div className='mt-14'>
                        <button className="btn btn-lg btn-primary btn-wide md:mr-5">About Us</button>
                        <button className="btn btn-lg btn-wide btn-outline text-white mt-5">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero