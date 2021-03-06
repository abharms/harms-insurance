import { useParallax } from 'react-scroll-parallax';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Navbar'

function Hero() {

    const parallax = useParallax({
        speed: -40,
    });

    const navigate = useNavigate();

    const onAboutUsClick = () => {
        navigate('/about-us')
        window.scrollTo(0, 0)
    }

    const onContactClick = () => {
        navigate('/contact')
        window.scrollTo(0, 0)
    }

    return (
        <div id="hero" ref={parallax.ref} className="relative grid grid-cols-6 gap-4 place-content-evenly hero-bg flex relative z-10">
            <Navbar />
            <div className='col-start-2 col-span-4 text-center'>
                <h1 className='mt-24 md:mt-0 text-5xl md:text-7xl text-white'>We provide personal service for your insurance needs</h1>

                <div className='mt-6 md:mt-14'>
                    <button onClick={() => onAboutUsClick()} className="btn btn-lg btn-primary btn-wide md:mr-5">About Us</button>
                    <button onClick={() => onContactClick()} className="btn btn-lg btn-wide btn-outline text-white mt-5">Contact</button>
                </div>
            </div>
            <span className='hidden md:block text-vertical text-xl text-white absolute bottom-24 place-self-center text-xl'>scroll</span>
            <i className="invisible md:visible text-vertical-2 text-xl text-white absolute bottom-6 place-self-center fa-solid fa-down-long"></i>
        </div>
    )
}

export default Hero