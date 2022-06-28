import ContactHeader from "./ContactHeader"
import Footer from "../../shared/Footer"
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useNavigate } from 'react-router-dom';

function ContactSuccess() {
    const navigate = useNavigate();
  return (
    <>
        <ContactHeader />
        <div className="py-40 bg-white relative z-10 mb-96">
            <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12  mb-10">
                <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-2 md:col-span-10 place-self-center text-5xl text-blue-600 font-semibold mb-10'>
                    <div className="text-center">
                        <h3>Your message has been sent!</h3>
                        <p className="text-black text-4xl mt-6">We will contact you shortly.</p>
                        <button onClick={() => navigate('/')} className="btn btn-outline mt-10 w-40">Home</button>
                    </div>
                    
                </AnimatedOnScroll>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ContactSuccess