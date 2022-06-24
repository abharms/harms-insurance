import { AnimatedOnScroll } from "react-animated-css-onscroll";
import goodville from '../../assets/goodville-logo.jpg'
import progressive from '../../assets/progressive-logo.jpg'
import foremost from '../../assets/foremost-logo.png'
import grundy from '../../assets/grundy-logo.png'
import selective from '../../assets/selective-logo.jpg'
import philadelphia from '../../assets/philadelphia-logo.png'

function CompanyLinks() {
    return (
        <div className="py-40 bg-white relative z-10 mb-96">
            <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12 place-content-evenly mb-10">
                <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-3 md:col-span-8 place-self-center text-5xl text-blue-600 font-semibold mb-10'>
                    <h3>policy and claim information<span className='text-black'>.</span></h3>
                </AnimatedOnScroll>
            </div>

            <div className='mx-3.5 mt-10 gap-10 grid md:grid-cols-2 xl:grid-cols-11'>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-2 ">
                    <a href="https://www.goodville.com/" target="_blank"><div className="card w-96 bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={goodville} alt="Goodville Logo" /></figure>
                    </div>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-5">
                    <a href="https://www.progressive.com/" target="_blank"><div className="card w-96 bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={progressive} alt="Progressive Logo" /></figure>
                    </div>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-8">
                    <a href="https://www.foremost.com/" target="_blank"><div className="card w-96 bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={foremost} alt="Foremost Logo" /></figure>
                    </div>
                    </a>
                </AnimatedOnScroll>
            </div>

            <div className='mx-3.5 mt-20 gap-10 grid md:grid-cols-2 xl:grid-cols-11'>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-2 ">
                    <a href="https://www.grundy.com/" target="_blank"><div className="card w-96 bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={grundy} alt="Grundy Logo" /></figure>
                    </div>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-5">
                    <a href="https://www.selective.com/" target="_blank"><div className="card w-96 bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={selective} alt="Selective Logo" /></figure>
                    </div>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full col-start-8">
                    <a href="https://www.phly.com/Home/Index.aspx" target="_blank"><div className="card w-96 bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={philadelphia} alt="Philadelphia Logo" /></figure>
                    </div>
                    </a>
                </AnimatedOnScroll>
            </div>

        </div>
    )
}

export default CompanyLinks