import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";

export const Section1 = () => {
  
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [isVisibleFive, setIsVisibleFive] = useState(false);
  const [isVisibleSix, setIsVisibleSix] = useState(false);
  const [isVisibleSeven, setIsVisibleSeven] = useState(false);
  const [isVisibleEight, setIsVisibleEight] = useState(false);

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);
  const sixRef = useRef(null);
  const sevenRef = useRef(null);
  const eightRef = useRef(null);

  useEffect(() => {
      const observerOne = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisibleOne(true);
              observerOne.disconnect();
          }
      });

      const observerTwo = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisibleTwo(true);
              observerTwo.disconnect();
          }
      });

      const observerThree = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleThree(true);
            observerThree.disconnect();
        }
      });

      const observerFour = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleFour(true);
            observerFour.disconnect();
        }
      });

      const observerFive = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleFive(true);
            observerFive.disconnect();
        }
      });

      const observerSix = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleSix(true);
            observerSix.disconnect();
        }
      });

      const observerSeven = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleSeven(true);
            observerSeven.disconnect();
        }
      });

      const observerEight = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisibleEight(true);
            observerEight.disconnect();
        }
      });

      if (oneRef.current) {
          observerOne.observe(oneRef.current);
      }

      if (twoRef.current) {
          observerTwo.observe(twoRef.current);
      }

      if (threeRef.current) {
        observerThree.observe(threeRef.current);
      }

      if (fourRef.current) {
        observerFour.observe(fourRef.current);
      }

      if (fiveRef.current) {
        observerFive.observe(fiveRef.current);
      }

      if (sixRef.current) {
        observerSix.observe(sixRef.current);
      }

      if (sevenRef.current) {
        observerSeven.observe(sevenRef.current);
      }

      if (eightRef.current) {
        observerEight.observe(eightRef.current);
      }

      return () => {
          if (oneRef.current) {
              observerOne.unobserve(oneRef.current);
          }
          if (twoRef.current) {
              observerTwo.unobserve(twoRef.current);
          }
          if (threeRef.current) {
            observerThree.unobserve(threeRef.current);
          }
          if (fourRef.current) {
            observerFour.unobserve(fourRef.current);
          }
          if (fiveRef.current) {
            observerFive.unobserve(fiveRef.current);
          }
          if (sixRef.current) {
            observerSix.unobserve(sixRef.current);
          }
          if (sevenRef.current) {
            observerSeven.unobserve(sevenRef.current);
          }
          if (eightRef.current) {
            observerEight.unobserve(eightRef.current);
          }
      };
  }, []);

    return (
      <>
        <section className="one">
          <div className="one-content" >
            <h1 className="headline black" >Bringing connivence to your venue, at no cost to you.</h1>
          </div>
        </section>

        <section className="two">
          <div className="two-content" >
            <div className={`two-content-box ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
              <h1 className="small-headline content-box-text-top black" >Powering Internationally</h1>
              <h1 className="small-description content-box-text-bottom" >Join the league-  Cycle some cities were working with (Gouna Egypt, Hurghada Egypt, Sahel Egypt, Cairo Egypt, Richmond USA, Morgantown USA, Starkville USA, Tampa USA Prauge Czechia,)</h1>
            </div>
            <div className={`two-content-box ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>
              <h1 className="small-headline content-box-text-top black" >Products We Dispense</h1>
              <h1 className="small-description content-box-text-bottom" >Tailored to perfection, driven by market research, to meet your venue's every need.</h1>
            </div>
            <div className={`two-content-box ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
              <h1 className="small-headline content-box-text-top black" >Small and Large Options</h1>
              <h1 className="small-description content-box-text-bottom" >Choose from our compact 72-unit machine or our expansive 400-unit powerhouse. The small machine hangs effortlessly, taking up zero space, yet packed with state-of-the-art features including a 3-foot touchscreen and seamless payment options.</h1>
            </div>
            <div className={`two-content-box ${isVisibleFour ? 'visible' : ''}`} ref={fourRef}>
              <h1 className="small-headline content-box-text-top black" >Seamless Installation & Maintenance</h1>
              <h1 className="small-description content-box-text-bottom" >Effortless setup backed by dedicated local support ensures uninterrupted service. We handle everything from restocking to permits, licensing, and sales tax remittance.</h1>
            </div>
          </div>
        </section>

        <section className="three">
          <div className="three-content" >
            <div className={`two-content-box ${isVisibleFive ? 'visible' : ''}`} ref={fiveRef}>
              <h1 className="small-headline content-box-text-top black" >Attractive Margins</h1>
              <h1 className="small-description content-box-text-bottom" >Enjoy profit margins ranging from $5 to $25 per product variant.</h1>
            </div>
            <div className={`two-content-box ${isVisibleSix ? 'visible' : ''}`} ref={sixRef}>
              <h1 className="small-headline content-box-text-top black" >Small and Large Options</h1>
              <h1 className="small-description content-box-text-bottom" >Choose from our compact 72-unit machine or our expansive 400-unit powerhouse. The small machine hangs effortlessly, taking up zero space, yet packed with state-of-the-art features including a 3-foot touchscreen and seamless payment options.</h1>
            </div>
            <div className={`two-content-box ${isVisibleSeven ? 'visible' : ''}`} ref={sevenRef}>
              <h1 className="small-headline content-box-text-top black" >30-Day Trial</h1>
              <h1 className="small-description content-box-text-bottom" >Try Cloud Station risk-free. If you're not satisfied, we'll remove it the same day, no questions asked.</h1>
            </div>
            <div className={`two-content-box ${isVisibleEight ? 'visible' : ''}`} ref={eightRef}>
              <h1 className="small-headline content-box-text-top black" >Advertisements</h1>
              <h1 className="small-description content-box-text-bottom" >Leverage our international presence for maximum brand exposure. With our touch screen machines attracting massive foot traffic, it's the perfect platform for advertising your brand.</h1>
            </div>
          </div>
        </section>

        <section className="four">
          <div className="four-content" >
          </div>
        </section>

      </>
    )
}