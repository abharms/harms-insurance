import group from '../../src/assets/group.jpg';
import Navbar from './Navbar';

function Hero() {

    // document.getElementById("wrapper").onscroll = function myFunction() {  
    //     var scrolltotop = document.scrollingElement.scrollTop;
    //     var target = document.getElementById("hero");
    //     var xvalue = "center";
    //     var factor = 0.5;
    //     var yvalue = scrolltotop * factor;
    //     target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    //   }



    return (
        <div id="wrapper">

        
            <div id="hero" className="relative grid grid-cols-6 gap-4 place-content-evenly hero-bg flex">
                <Navbar />
                <div className='col-start-2 col-span-4 text-center '>
                    <h1 className='text-7xl text-white'>We provide personal service for your insurance needs</h1>

                    <div className='mt-14'>
                        <button className="btn btn-primary btn-lg mr-5">About Us</button>
                        <button className="btn btn-outline btn-lg btn-accent">Contact</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero