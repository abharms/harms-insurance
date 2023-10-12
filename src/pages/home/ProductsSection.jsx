import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useNavigate } from "react-router-dom";

function ProductsSection() {
  const navigate = useNavigate();

  const onSeeAllProductsClick = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-40 bg-gray-100 about-bg relative z-10">
      <div className="mx-3.5 grid grid-cols-1 md:grid-cols-12 place-content-evenly mb-10">
        <AnimatedOnScroll
          animationInDelay="120"
          animationInDuration="1500"
          animationIn="fadeInDown"
          className="md:col-start-6 md:col-span-2 place-self-center text-6xl text-blue-600 font-semibold ">
          <h2>
            products<span className="text-black">.</span>
          </h2>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationInDuration="1500"
          animationIn="fadeInDown"
          className="md:col-start-4 col-span-6 place-self-center text-center  mt-6 text-2xl">
          <p>
            As an independent agency, we can offer a range of insurance
            products, even beyond those listed below. Contact us today to see
            how we can help with your insurance needs.
          </p>
        </AnimatedOnScroll>
      </div>
      <div className="mx-3.5 gap-10 grid md:grid-cols-2 xl:grid-cols-4">
        <AnimatedOnScroll
          animationIn="fadeInUp"
          className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
          <div className="card-body text-4xl xl:text-3xl 2xl:text-4xl text-center">
            <div className="relative">
              <i className="fa-solid fa-house text-blue-600"></i>
              <i className="fas fa-car-side text-blue-600 ml-4 relative top-1"></i>
            </div>
            <p className="mt-5">Home and Auto</p>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationInDelay="100"
          animationIn="fadeInUp "
          className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
          <div className="card-body text-4xl xl:text-3xl 2xl:text-4xl text-center">
            <i className="fa-solid fa-tractor text-blue-600"></i>
            <p className="mt-5">Farm</p>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationInDelay="160"
          animationIn="fadeInUp"
          className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
          <div className="card-body text-4xl xl:text-3xl 2xl:text-4xl text-center">
            <i className="fa-solid fa-cross text-blue-600"></i>
            <p className="mt-5">Church</p>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationInDelay="240"
          animationIn="fadeInUp"
          className="mb-8 card w-full bg-base-100 shadow-xl place-self-center rounded-2xl">
          <div className="card-body text-4xl xl:text-3xl 2xl:text-4xl text-center">
            <i className="fa-solid fa-people-group text-blue-600"></i>
            <p className="mt-5">Life and Health</p>
          </div>
        </AnimatedOnScroll>
      </div>
      <div className="grid grid-cols-1 mt-24">
        <button
          onClick={() => onSeeAllProductsClick()}
          className="btn btn-lg btn-outline place-self-center ">
          See All Products
        </button>
      </div>
    </div>
  );
}

export default ProductsSection;
