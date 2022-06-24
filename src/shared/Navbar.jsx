import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import logo from '../../src/assets/logo-white.png';

function Navbar() {
    const [mobileNavToggled, setmobileNavToggled] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();

    const onMobileClick = () => {
        setmobileNavToggled(!mobileNavToggled)
    }

    return (
        <>
            <nav className="hidden md:flex absolute top-10 navbar text-xl pl-5 pr-5 z-10">
                <div className="flex-1">
                    <img src={logo} height="50px" width="200px" />
                </div>
                <div className="">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <li onClick={() => navigate('/')}><a className={location.pathname === '/' && 'nav-active'}>Home</a></li>
                        <li onClick={() => navigate('/about-us')} ><a className={location.pathname === '/about-us' && 'nav-active'}>About Us</a></li>
                        <li onClick={() => navigate('/products')}><a className={location.pathname === '/products' && 'nav-active'}>Products</a></li>
                        <li onClick={() => navigate('/claims')}><a className={location.pathname === '/claims' && 'nav-active'}>Claims</a></li>
                        <li onClick={() => navigate('/contact')}><a className={location.pathname === '/contact' && 'nav-active'}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <nav className='md:hidden absolute navbar top-10'>
                <div className="inline-block">
                    <img src={logo} height="50px" width="200px" />
                </div>
                <div onClick={() => onMobileClick()} className={`${mobileNavToggled && 'is-active'}  hamburger inline-block right-10 absolute`} id="hamburger-1">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>

            {mobileNavToggled && (
                <AnimatedOnScroll animationInDuration="300" animationIn="fadeIn" animationOut="fadeOut">
                    <ul className="menu bg-base-100 w-full text-left absolute top-28 right-0">
                        <li onClick={() => navigate('/')}><a>Home</a></li>
                        <li onClick={() => navigate('/about-us')} className="active"><a>About Us</a></li>
                        <li onClick={() => navigate('/products')} className="active"><a>Products</a></li>
                        <li onClick={() => navigate('/claims')} className="active"><a>Claims</a></li>
                        <li onClick={() => navigate('/contact')} className="active"><a>Contact</a></li>
                    </ul>
                </AnimatedOnScroll>

            )}

        </>
    )
}

export default Navbar