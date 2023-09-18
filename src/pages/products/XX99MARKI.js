import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getXX99MKIQuantity } from "../../store/cartSlice";
import { addItem, updateQuantity } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import xx99MIIM from "../../assets/images/sugestions/xx-99-2-mobile.png";
import xx99MIIT from "../../assets/images/sugestions/xx-99-2-tablet.png";
import zx9SugM from "../../assets/images/sugestions/zx9-mobile.png";
import zx9SugT from "../../assets/images/sugestions/zx9-tablet.png";
import xx59M from "../../assets/images/sugestions/xx559-mobile.png";
import xx59T from "../../assets/images/sugestions/xx59-tablet.png";

const XX99MARKI = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector(getXX99MKIQuantity);

  const handleSubtract = () => {
    if (quantity !== 0) {
      dispatch(updateQuantity({ type: "remove-markI" }));
    }
  };

  const hanbleAdd = () => {
    dispatch(updateQuantity({ type: "add-markI" }));
  };

  const addItems = (quantity) => {
    if (quantity !== 0) {
      const item = {
        name: "xx99mkI",
        total: 1750 * quantity,
        defaultPrice: 1750,
        quantity: quantity,
      };
      dispatch(addItem(item));
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <>
      <section className="px-6 pt-6 mb-[120px] md:px-10 xl:px-40 2xl:px-80">
        <Link
          onClick={() => {
            navigate(-1);
          }}
          className="text-black/50 my-4"
        >
          Go Back
        </Link>
        <figure className="headphone-figure-product ">
          <picture className="headphone-picture-product">
            <img
              src={require("../../assets/images/products/xx99-mark-1-mobile.png")}
              alt="xx99-mark-2-headpnones"
            />
          </picture>
          <figcaption className="headphone-fig-caption-product ">
            <h1 className="headphone-heading">xx99 mark I headphones</h1>
            <p className="headphone-text">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <p className="price">$ 1.750</p>
            <div className="add-to-cart-container">
              <div className="add-to-cart-wapper">
                <div
                  onClick={() => {
                    handleSubtract();
                  }}
                  className="subtract-btn"
                >
                  -
                </div>
                <div className="quantity">{quantity}</div>
                <div
                  onClick={() => {
                    hanbleAdd();
                  }}
                  className="add-btn"
                >
                  +
                </div>
              </div>
              <button
                onClick={() => addItems(quantity)}
                className="btn-orange justify-self-start w-1/2"
              >
                Add to cart
              </button>
            </div>
          </figcaption>
        </figure>
      </section>
      <section className="px-6 mb-[120px] md:mx-10 xl:px-40 2xl:px-80">
        <h2 className="text-2xl uppercase font-semibold mb-6">Features</h2>
        <p className="mb-4 text-black/50">
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
        </p>
        <p className="text-black/50">
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
        </p>
      </section>

      <section className="px-6 mb-[120px] md:px-10 md:flex md:justify-between md:w-[70%] xl:px-40 2xl:px-80">
        <h2 className="text-2xl uppercase font-semibold mb-6">In the box</h2>
        <div>
          <div className="flex mb-2">
            <p className="mr-6 text-orange-main">1x</p>
            <p className="text-black/50">Headphone Unit</p>
          </div>
          <div className="flex mb-2">
            <p className="mr-6 text-orange-main">2x</p>
            <p className="text-black/50">Replacment Earcups</p>
          </div>
          <div className="flex mb-2 ">
            <p className="mr-6 text-orange-main">1x</p>
            <p className="text-black/50">User Manual</p>
          </div>
          <div className="flex mb-2">
            <p className="mr-6 text-orange-main">1x</p>
            <p className="text-black/50">3.5mm 5m Audio Cable</p>
          </div>
        </div>
      </section>
      <section className="promo">
        <img
          src={require("../../assets/images/products/xx-99-I-1.png")}
          className="rounded-lg  md:order-3 md:w-full"
          alt="promo"
        />
        <img
          src={require("../../assets/images/products/xx-99-I-mobile-2.png")}
          className="rounded-lg md:order-1 md:w-full"
          alt="promo"
        />
        <img
          src={require("../../assets/images/products/xx-99-I-mobile-3.png")}
          className="rounded-lg md:order-2 md:row-span-2 md:w-full"
          alt="promo"
        />
      </section>
      <section className="px-6 mb-[120px] md:px-10 xl:px-40 2xl:px-80">
        <h2 className="yml-title">You may also like</h2>
        <div className="yml-grid">
          <figure className="yml-container">
            <picture className="yml-picture">
              {/* Desktop image 
                        <source
                          media="(min-width: 1280px)"
                          srcSet={zx9Desktop}
                        />
                        */}
              {/* Tablet image */}
              <source media="(min-width: 768px)" srcSet={xx99MIIT} />
              {/* Mobile image */}
              <img src={xx99MIIM} alt="footer-promo" />
            </picture>
            <h3 className="uppercase font-semibold text-xl md:my-10">
              XX99 Mark II
            </h3>
            <Link to="/headphones/headphone-xx99-mark-2">
              <button className="btn-orange">See product</button>
            </Link>
          </figure>
          <figure className="yml-container">
            <picture className="yml-picture">
              {/* Desktop image 
                        <source
                          media="(min-width: 1280px)"
                          srcSet={zx9Desktop}
                        />
                        */}
              {/* Tablet image */}
              <source media="(min-width: 768px)" srcSet={xx59T} />
              {/* Mobile image */}
              <img src={xx59M} alt="footer-promo" />
            </picture>
            <h3 className="uppercase font-semibold text-xl md:my-10">XX59</h3>
            <Link to="/headphones/headphone-xx59">
              <button className="btn-orange">See product</button>
            </Link>
          </figure>
          <figure className="yml-container">
            <picture className="yml-picture">
              {/* Desktop image 
                        <source
                          media="(min-width: 1280px)"
                          srcSet={zx9Desktop}
                        />
                        */}
              {/* Tablet image */}
              <source media="(min-width: 768px)" srcSet={zx9SugT} />
              {/* Mobile image */}
              <img src={zx9SugM} alt="footer-promo" />
            </picture>
            <h3 className="uppercase font-semibold text-xl md:my-10">
              ZX9 Speaker
            </h3>
            <Link to="/speakers/speaker-zx9">
              <button className="btn-orange">See product</button>
            </Link>
          </figure>
        </div>
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
              <img
                className="xl:h-[140px]"
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
    </>
  );
};

export default XX99MARKI;
