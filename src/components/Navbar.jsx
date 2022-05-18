import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import logo from '../../src/assets/logo-white.png';

function Navbar() {
    const [navToggled, setNavToggled] = useState(false);
    const navigate = useNavigate();

    const onMobileClick = () => {
        setNavToggled(prevState => !prevState)
    }

    return (
        <>
            <nav className="hidden md:flex absolute top-10 navbar text-xl pl-5 pr-5 z-10">
                <div className="flex-1">
                    <img src={logo} height="50px" width="200px" />
                </div>
                <div className="">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <li><a>Home</a></li>
                        <li onClick={() => navigate('/about-us')}><a>About Us</a></li>
                        <li><a>Products</a></li>
                        <li><a>Claims &amp; Payments</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <nav className='md:hidden absolute navbar top-10'>
                <div className="inline-block">
                    <img src={logo} height="50px" width="200px" />
                </div>
                <div onClick={() => onMobileClick()} className={`${navToggled && 'is-active'}  hamburger inline-block right-10 absolute`} id="hamburger-1">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </nav>

            {navToggled && (
                <AnimatedOnScroll animationInDuration="300" animationIn="fadeIn" animationOut="fadeOut">
                    <ul class="menu bg-base-100 w-full text-left absolute top-28 right-0">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Products</a></li>
                        <li><a>Claims &amp; Payments</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </AnimatedOnScroll>

            )}

        </>
    )
}

export default Navbar