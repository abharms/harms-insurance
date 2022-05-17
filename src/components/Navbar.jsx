import { useNavigate } from 'react-router-dom';
import logo from '../../src/assets/logo-white.png';

function Navbar() {
    const navigate = useNavigate();

    const onMobileClick = () => {

    }

    return (
        <nav className="absolute top-10 navbar text-xl pl-5 pr-5 z-10">
            <div className="flex-1">
                <img src={logo} height="50px" width="200px" />
            </div>
            <div className="hidden lg:visible flex-none">
                <ul className="menu menu-horizontal p-0 text-white">
                    <li><a>Home</a></li>
                    <li onClick={() => navigate('/about-us')}><a>About Us</a></li>
                    <li><a>Products</a></li>
                    <li><a>Claims &amp; Payments</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <button onClick={() => onMobileClick()} class="lg:hidden btn btn-square btn-ghost btn-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <ul class="menu bg-base-100 w-56 rounded-box text-left absolute top-14 right-0">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Products</a></li>
                <li><a>Claims &amp; Payments</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar