import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useNavigate } from "react-router-dom";

function Description() {
  const navigate = useNavigate();

  const onContactClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        id="description"
        className="relative mb-[720px] md:mb-[440px] grid gap-4 grid-cols-5 flex bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5 h-max">
        <div className="mt-10 xl:mt-0 col-start-2 col-span-3 ">
          <AnimatedOnScroll
            animationInDelay="120"
            animationInDuration="1500"
            animationIn="fadeInDown">
            <h2 className="text-center text-6xl text-white font-semibold mb-10">
              about our agency.
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animationIn="fadeInUp"
            animationInDuration="1800"
            className="text-2xl text-white text-center">
            <p className="mt-4">
              The Agency began in the mid-1960’s serving primarily the Mennonite
              congregations in Western Oklahoma with property and casualty
              insurance.
            </p>
            <p className="mt-4 mb-10">
              Over the years, our clientele has expanded beyond the Mennonite
              boundaries, but we still base our business on biblical principles
              and provide the same personal service.{" "}
            </p>
            <p className="mt-4 mb-10">
              We make every effort to get to know our clients so that we can
              help them understand the coverages they have chosen and be
              available to help them though the claims process.{" "}
            </p>
            <button
              onClick={() => onContactClick()}
              className="btn btn-outline text-white text-xl">
              Contact Us
            </button>
          </AnimatedOnScroll>
        </div>
      </div>
    </>
  );
}

export default Description;
