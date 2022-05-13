import logo from '../../src/assets/logo.png';

function Navbar() {
    return (
        <div className="absolute top-10 navbar text-xl pl-14 pr-14 z-10">
            <div className="flex-1">
                <img src={logo} height="50px" width="300px" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 text-white">
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Products</a></li>
                    <li><a>Claims &amp; Payments</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar