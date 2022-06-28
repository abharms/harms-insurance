import ContactHeader from "./ContactHeader"
import Footer from "../../shared/Footer"
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function ContactSuccess() {
  return (
    <>
        <ContactHeader />
        <div className="py-40 bg-white relative z-10 mb-96">
            <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12  mb-10">
                <AnimatedOnScroll animationInDelay="120" animationInDuration="1500" animationIn="fadeInDown" className='md:col-start-2 md:col-span-10 place-self-center text-5xl text-blue-600 font-semibold mb-10'>
                    <h3>Your message has been sent<span className='text-black'>!</span></h3>
                    <p>We will contact you shortly.</p>
                </AnimatedOnScroll>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ContactSuccess