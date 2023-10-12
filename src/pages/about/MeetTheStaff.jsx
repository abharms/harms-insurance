import React from "react";
import carlin from "../../assets/carlin.jpg";
import chavan from "../../assets/chavan.jpg";
import kerrie from "../../assets/Kerrie.jpg";
import tyler from "../../assets/Tyler.jpg";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useParallax } from "react-scroll-parallax";

function MeetTheStaff() {
  const parallaxCarlin = useParallax({
    speed: -8,
  });

  const parallaxChavan = useParallax({
    speed: -8,
  });

  const parallaxKerrie = useParallax({
    speed: -8,
  });

  const parallaxTyler = useParallax({
    speed: -8,
  });

  return (
    <>
      <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5">
        <AnimatedOnScroll
          animationIn="fadeInLeft"
          animationInDuration="1900"
          className="lg:col-start-2 xl:col-start-3 lg:col-span-4">
          <h2 className="card-title text-4xl">Carlin Day</h2>
          <p className="text-xl mt-2">
            Carlin is the agency Principal and is a licensed producer working
            with property and casualty as well as life and health.
          </p>
          <p className="text-xl mt-4">
            Contact Carlin today to begin working on your insurance needs.
          </p>
          <a
            href="mailto:carlin@harmsinsuranceok.com"
            className="btn btn-outline mt-10">
            <i className="fa-solid fa-envelope mr-4"></i>Email
          </a>
        </AnimatedOnScroll>

        <AnimatedOnScroll
          animationIn="fadeInUp"
          animationInDuration="1900"
          className="mx-3.5 gap-10 lg:col-start-7 xl:col-start-8 mt-32 lg:mt-0 relative">
          <div className="card lg:w-96 bg-base-100 shadow-xl z-10">
            <figure>
              <img src={carlin} alt="Carlin Day" />
            </figure>
          </div>
          <div
            ref={parallaxCarlin.ref}
            className="absolute rounded-2xl bg-blue-600 shadow-xl lg:h-96 lg:w-96 lg:-top-0 lg:left-16">
            <div className="text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white">
              CARLIN
            </div>
          </div>
        </AnimatedOnScroll>
      </section>

      <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5 about-bg">
        <AnimatedOnScroll
          animationIn="fadeInLeft"
          animationInDuration="1900"
          className="mx-3.5 gap-10 lg:col-start-2 xl:col-start-3">
          <div className="card lg:w-96 bg-base-100 shadow-xl z-10">
            <figure>
              <img src={chavan} alt="Chavan Sampley" />
            </figure>
          </div>
          <div
            ref={parallaxChavan.ref}
            className="absolute rounded-2xl bg-blue-600 shadow-xl lg:h-96 lg:w-96 lg:-top-0 lg:left-16">
            <div className="text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white">
              CHAVAN
            </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll
          animationIn="fadeInRight"
          animationInDuration="1900"
          className="lg:col-start-7 xl:col-start-8 lg:col-span-4 mt-32 lg:mt-0">
          <h2 className="card-title text-4xl">Chavan Sampley</h2>
          <p className="text-xl mt-2">
            Chavan graduated from Southwestern Oklahoma State University with a
            Bachelor’s of Business Administration in Marketing, and joined the
            agency in 2022.
          </p>
          <p className="text-xl mt-4">
            He is a fully licensed agent helping in all aspects of insurance
            containing property, casualty, health and life.{" "}
          </p>
          <p className="text-xl mt-4">
            He looks forward to the opportunity to build relationships and
            service his clients.
          </p>
          <a
            href="mailto:chavan@harmsinsuranceok.com"
            className="btn btn-outline mt-10">
            <i className="fa-solid fa-envelope mr-4"></i>Email
          </a>
        </AnimatedOnScroll>
      </section>

      <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5">
        <AnimatedOnScroll
          animationIn="fadeInLeft"
          animationInDuration="1900"
          className="lg:col-start-2 xl:col-start-3 lg:col-span-4">
          <h2 className="card-title text-4xl">Kerrie Unruh</h2>
          <p className="text-xl mt-2">
            Kerrie joined the Harms Insurance team in 2023. She comes to us with
            a background in ministry, administration, management & customer
            service.
          </p>
          <p className="text-xl mt-4">
            Kerrie is married to Jerred, chaplain at The Denny Price Family YMCA
            in Enid. Together they have served for many years in churches and
            para church ministries. They enjoy landscaping, roasting and
            drinking coffee, hiking, camping and being together as a family!
            Their children, Titus and Elli, attend Oklahoma Bible Academy, they
            love sports and the outdoors, and hanging out with friends and
            family.
          </p>
          <p className="text-xl mt-4">
            Kerrie has a passion for serving others and providing excellent
            customer care. She is a licensed agent living in Enid and is ready
            to help you with your insurance needs. You can call Kerrie at
            580-786-0589
          </p>
        </AnimatedOnScroll>

        <AnimatedOnScroll
          animationIn="fadeInUp"
          animationInDuration="1900"
          className="mx-3.5 gap-10 lg:col-start-7 xl:col-start-8 mt-32 lg:mt-0 relative">
          <div className="card lg:w-96 bg-base-100 shadow-xl z-10">
            <figure>
              <img src={kerrie} alt="Kerrie Unruh" />
            </figure>
          </div>
          <div
            ref={parallaxKerrie.ref}
            className="absolute rounded-2xl bg-blue-600 shadow-xl lg:h-96 lg:w-96 lg:-top-0 lg:left-16">
            <div className="text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white">
              KERRIE
            </div>
          </div>
        </AnimatedOnScroll>
      </section>

      <section className="relative grid gap-4 grid-cols-1 lg:grid-cols-12 bg-white py-40 z-10 pl-5 xl:pl-0 px-3.5 about-bg">
        <AnimatedOnScroll
          animationIn="fadeInLeft"
          animationInDuration="1900"
          className="mx-3.5 gap-10 lg:col-start-2 xl:col-start-3">
          <div className="card lg:w-96 bg-base-100 shadow-xl z-10">
            <figure>
              <img src={tyler} alt="Tyler Stark" />
            </figure>
          </div>
          <div
            ref={parallaxTyler.ref}
            className="absolute rounded-2xl bg-blue-600 shadow-xl lg:h-96 lg:w-96 lg:-top-0 lg:left-16">
            <div className="text-6xl font-semibold text-vertical absolute -right-4 top-64 opacity-20 text-white">
              TYLER
            </div>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll
          animationIn="fadeInRight"
          animationInDuration="1900"
          className="lg:col-start-7 xl:col-start-8 lg:col-span-4 mt-32 lg:mt-0">
          <h2 className="card-title text-4xl">Chavan Sampley</h2>
          <p className="text-xl mt-2">
            Tyler joined the agency in 2023. He is a graduate from Southwestern
            Oklahoma State University. Tyler is a licensed agent who is ready to
            help you with your insurance needs. Give Tyler a call today at
            580-530-8206.
          </p>
        </AnimatedOnScroll>
      </section>
    </>
  );
}

export default MeetTheStaff;
