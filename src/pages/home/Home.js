import React, { useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSummary } from "../../store/cartSlice";

import zx9Mobile from "../../assets/images/zx9-mobile.png";
import zx9Tablet from "../../assets/images/zx9-tablet.png";
import zx9Desktop from "../../assets/images/zx9-desktop.png";
import heroDesktop from "../../assets/images/hero-desktop.jpg";

const Home = () => {
  const summary = useSelector(getSummary);
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  /*
  useEffect(() => {
    summary
      ? (document.body.style.overflow="hidden")
      : (document.body.style.overflow="scroll");
  }, [summary]);
  */
  return (
    <>
      <section className="hero-container relative">
        <div className="hero-wapper ">
          <div className="hero-main">
            <span className="hero-main-subheading">New product</span>
            <h1 className="hero-main-title">XX99 Mark II HeadphoneS</h1>
            <p className="hero-main-p">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/headphones/headphone-xx99-mark-2">
              <button className="btn-orange">See product</button>
            </Link>
          </div>
        </div>
        <div className="z-10 top-0 left-0 bottom-0 absolute w-full h-full md:bg-black/40 "></div>
      </section>

      <section className="products-sections">
        <div className="product-wapper">
          <div className="product-container">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={require("../../assets/images/products-section/products-section-headphone-desktop.png")}
              />
              <source
                media="(min-width: 768px)"
                srcSet={require("../../assets/images/products-section/products-section-headphone-tablet.png")}
              />
              <img className="xl:h-[140px]"
                src={require("../../assets/images/products-section/product-section-headphone-mobile.png")}
                alt="footer-promo"
              />
            </picture>
            <h2 className="uppercase font-semibold tracking-widest">
              Headphones
            </h2>
            <Link
              to="/headphones"
              onClick={() => {
                scrollTop();
              }}
            >
              <button className="btn-link mb-4">
                Shop <FiChevronRight className="ml-1 hover:text-orange-600" />
              </button>
            </Link>
          </div>
          <div className="product-block-element"></div>
        </div>
        <div className="product-wapper">
          <div className="product-container">
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={require("../../assets/images/products-section/product-section-speaker-desktop.png")}
              />
              <source
                media="(min-width: 768px)"
                srcSet={require("../../assets/images/products-section/products-section-speaker-trablet.png")}
              />
              <img
                src={require("../../assets/images/products-section/prodcut-section-speaker-mobile.png")}
                alt="footer-promo"
              />
            </picture>

            <h2 className="uppercase font-semibold tracking-widest">
              Speakers
            </h2>
            <Link
              to="/speakers"
              onClick={() => {
                scrollTop();
              }}
            >
              <button className="btn-link mb-4">
                Shop <FiChevronRight className="ml-1 hover:text-orange-600" />
              </button>
            </Link>
          </div>
          <div className="product-block-element"></div>
        </div>
        <div className="product-wapper">
          <div className="product-container">
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={require("../../assets/images/products-section/products-section-earphoens-desktop.png")}
              />
              <source
                media="(min-width: 768px)"
                srcSet={require("../../assets/images/products-section/products-section-earphones-tablet.png")}
              />
              <img
                src={require("../../assets/images/products-section/products-section-earphones-mobile.png")}
                alt="footer-promo"
              />
            </picture>
            <h2 className="uppercase font-semibold tracking-widest">
              Earphones
            </h2>
            <Link
              to="/earphones"
              onClick={() => {
                scrollTop();
              }}
            >
              <button className="btn-link mb-4">
                Shop <FiChevronRight className="ml-1 hover:text-orange-600" />
              </button>
            </Link>
          </div>
          <div className="product-block-element"></div>
        </div>
      </section>

      <section className="product-usp">
        <div className="zx9-container">
          <picture className="z-40 ">
            {/* Desktop image */}
            <source media="(min-width: 1280px)" srcSet={zx9Desktop} />
            {/* Tablet image */}
            <source media="(min-width: 768px)" srcSet={zx9Tablet} />
            {/* Mobile image */}
            <img
              src={zx9Mobile}
              alt="footer-promo"
              className="rounded-lg w-full "
            />
          </picture>
          <div className="flex flex-col justify-center items-center xl:w-[40%] xl:items-start ">
          <h2 className="zx9-title">ZX9 Speaker</h2>
          <p className="zx9-paragprah">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/speakers/speaker-zx9" className="z-40">
            <button className="btn-dark">See Product</button>
          </Link>
          </div>
          
          <div className="oval-group-container ">
            <div className="oval-1">
              <div className="oval-2">
                <div className="oval-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="zx7-container">
          <h2 className="zx7-title">ZX7 Speaker</h2>
          <Link to="/speakers/speaker-zx7">
            <button className="btn-outline">See Product</button>
          </Link>
        </div>
        <div className="grid gril-col-1 md:grid-cols-2 gap-6">
          <div className=" rounded-lg ">
            <img
              src={require("../../assets/images/yx1-mobile.png")}
              className="rounded-lg w-full"
            />
          </div>
          <div className="yx1-container rounded-lg">
            <h2 className="zx7-title">yx1 earphones</h2>
            <Link to="/earphones/earphone-yx1">
              <button className="btn-outline">See Product</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
