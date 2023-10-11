import { AnimatedOnScroll } from "react-animated-css-onscroll";
import goodville from '../../assets/goodville-logo.jpg'
import progressive from '../../assets/progressive-logo.jpg'
import foremost from '../../assets/foremost-logo.png'
import grundy from '../../assets/grundy-logo.png'
import selective from '../../assets/selective-logo.jpg'
import philadelphia from '../../assets/philadelphia-logo.png'
import aig from '../../assets/aig-logo.png'
import allstate from '../../assets/allstate-logo.jpg'
import guideone from '../../assets/guideone-logo.png'
import legalGeneral from '../../assets/legal-general-logo.png'
import ohio from '../../assets/ohio-logo.png'
import safeco from '../../assets/safeco-logo.png'

function CompanyLinks() {
    return (
        <div style={{marginBottom: 34 + 'rem'}} className="py-40 bg-white relative z-10 h-max">
            <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12  mb-10">
                <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-2 md:col-span-10 place-self-center text-5xl text-blue-600 font-semibold mb-10'>
                    <h3>policy and claim information<span className='text-black'>.</span></h3>
                </AnimatedOnScroll>
            </div>

            <div className='mx-3.5 mt-10 gap-10 grid grid-cols-1 lg:grid-cols-3'>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full  ">
                   
                    <a href="https://www.goodville.com/" target="_blank" className="card shadow-xl bg-white z-10 h-40 place-content-center">
                        <figure><img src={goodville} alt="Goodville Logo" /></figure>
                    </a>
               
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.progressive.com/" target="_blank" className="card shadow-xl bg-white z-10 h-40 place-content-center">
                        <figure><img src={progressive} alt="Progressive Logo" /></figure>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.foremost.com/" target="_blank" className="card shadow-xl bg-white z-10 h-40 place-content-center">
                        <figure><img src={foremost} alt="Foremost Logo" /></figure>
                    </a>
                </AnimatedOnScroll>
            </div>

            <div className='mx-3.5 mt-20 gap-10 grid grid-cols-1 lg:grid-cols-3'>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.grundy.com/" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={grundy} alt="Grundy Logo" className="h-3/4" /></figure>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.selective.com/" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={selective} alt="Selective Logo" /></figure>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.phly.com/Home/Index.aspx" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={philadelphia} alt="Philadelphia Logo" /></figure>
                    </a>
                </AnimatedOnScroll>
            </div>




            <div className='mx-3.5 mt-20 gap-10 grid grid-cols-1 lg:grid-cols-3'>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.aig.com/individual" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={aig} alt="AIG Logo" className="h-2/4" /></figure>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.allstate.com/" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={allstate} alt="Allstate Logo" className="h-2/4" /></figure>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.guideone.com" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={guideone} alt="Guide One Logo" className="h-2/4" /></figure>
                    </a>
                </AnimatedOnScroll>
            </div>

            <div className='mx-3.5 mt-20 gap-10 grid grid-cols-1 lg:grid-cols-3'>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.lgamerica.com/" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={legalGeneral} alt="Legal General Logo" /></figure>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full lg:col-start-2">
                    <a href="https://www.safeco.com/" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={safeco} alt="SafeCo Logo" /></figure>
                    </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationInDelay="240" animationIn="fadeInUp" className="w-full">
                    <a href="https://www.ohionational.com/sites/public" target="_blank" className="card bg-white shadow-xl z-10 h-40 place-content-center">
                        <figure><img src={ohio} alt="Ohio National Logo" className="h-3/4" /></figure>
                    </a>
                </AnimatedOnScroll>
            </div>
        </div>
    )
}

export default CompanyLinks