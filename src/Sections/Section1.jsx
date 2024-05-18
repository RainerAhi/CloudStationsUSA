import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";

export const Section1 = () => {
  
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);
  const [isVisibleFive, setIsVisibleFive] = useState(false);
  const [isVisibleSix, setIsVisibleSix] = useState(false);
  const [isVisibleSeven, setIsVisibleSeven] = useState(false);
  const [isVisibleEight, setIsVisibleEight] = useState(false);
  const [isVisibleNine, setIsVisibleNine] = useState(false);
  const [isVisibleTen, setIsVisibleTen] = useState(false);
  const [isVisibleEleven, setIsVisibleEleven] = useState(false);
  const [isVisibleTwelve, setIsVisibleTwelve] = useState(false);

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);
  const sixRef = useRef(null);
  const sevenRef = useRef(null);
  const eightRef = useRef(null);
  const nineRef = useRef(null);
  const tenRef = useRef(null);
  const elevenRef = useRef(null);
  const twelveRef = useRef(null);

  useEffect(() => {

    const observerOne = new IntersectionObserver(([entry]) => {
      setIsVisibleOne(entry.isIntersecting);
    });

    const observerTwo = new IntersectionObserver(([entry]) => {
      setIsVisibleTwo(entry.isIntersecting);
    });

    const observerThree = new IntersectionObserver(([entry]) => {
      setIsVisibleThree(entry.isIntersecting);
    });

    const observerFour = new IntersectionObserver(([entry]) => {
      setIsVisibleFour(entry.isIntersecting);
    });

    const observerFive = new IntersectionObserver(([entry]) => {
      setIsVisibleFive(entry.isIntersecting);
    });

    const observerSix = new IntersectionObserver(([entry]) => {
      setIsVisibleSix(entry.isIntersecting);
    });

    const observerSeven = new IntersectionObserver(([entry]) => {
      setIsVisibleSeven(entry.isIntersecting);
    });

    const observerEight = new IntersectionObserver(([entry]) => {
      setIsVisibleEight(entry.isIntersecting);
    });

    const observerNine = new IntersectionObserver(([entry]) => {
      setIsVisibleNine(entry.isIntersecting);
    });

    const observerTen = new IntersectionObserver(([entry]) => {
      setIsVisibleTen(entry.isIntersecting);
    });

    const observerEleven = new IntersectionObserver(([entry]) => {
      setIsVisibleEleven(entry.isIntersecting);
    });

    const observerTwelve = new IntersectionObserver(([entry]) => {
      setIsVisibleTwelve(entry.isIntersecting);
    });

    observerOne.observe(oneRef.current);
    observerTwo.observe(twoRef.current);
    observerThree.observe(threeRef.current);
    observerFour.observe(fourRef.current);
    observerFive.observe(fiveRef.current);
    observerSix.observe(sixRef.current);
    observerSeven.observe(sevenRef.current);
    observerEight.observe(eightRef.current);
    observerNine.observe(nineRef.current);
    observerTen.observe(tenRef.current);
    observerEleven.observe(elevenRef.current);
    observerTwelve.observe(twelveRef.current);

    return () => {
      observerOne.unobserve(oneRef.current);
      observerTwo.unobserve(twoRef.current);
      observerThree.unobserve(threeRef.current);
      observerFour.unobserve(fourRef.current);
      observerFive.unobserve(fiveRef.current);
      observerSix.unobserve(sixRef.current);
      observerSeven.unobserve(sevenRef.current);
      observerEight.unobserve(eightRef.current);
      observerNine.unobserve(nineRef.current);
      observerTen.unobserve(tenRef.current);
      observerEleven.unobserve(elevenRef.current);
      observerTwelve.unobserve(twelveRef.current);
    };
  }, []);


    return (
      <>
        <section className="one">
          <div className="mobile-scroll" />
          <div className="one-content" >
            <h1 className="headline black" >Bringing connivence <span className="blue" >to your</span> venue, at no cost to you.</h1>
          </div>
        </section>

        <section className="two">
          <div className="mobile-scroll" />
          <div className="two-content" >
            <div className={`two-content-box ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
              <h1 className="small-headline content-box-text-top black" >Powering <span className="black" >Internationally</span></h1>
              <h1 className="small-description content-box-text-bottom" >Join the league-  Cycle some cities were working with (Gouna Egypt, Hurghada Egypt, Sahel Egypt, Cairo Egypt, Richmond USA, Morgantown USA, Starkville USA, Tampa USA Prauge Czechia,)</h1>
            </div>
            <div className={`blue-border ${isVisibleTen ? 'visible' : ''}`} ref={tenRef}/>  
            <div className={`two-content-box ${isVisibleTwo ? 'visible' : ''}`} ref={twoRef}>
              <h1 className="small-headline content-box-text-top black" >Products We Dispense</h1>
              <h1 className="small-description content-box-text-bottom" >Tailored to perfection, driven by market research, to meet your venue's every need.</h1>
            </div>
          </div>
        </section>

        <section className="three">
          <div className="mobile-scroll" />
          <div className="three-content" >
            <div className={`two-content-box ${isVisibleThree ? 'visible' : ''}`} ref={threeRef}>
              <h1 className="small-headline content-box-text-top black" >Small and Large Options</h1>
              <h1 className="small-description content-box-text-bottom" >Choose from our compact 72-unit machine or our expansive 400-unit powerhouse. The small machine hangs effortlessly, taking up zero space, yet packed with state-of-the-art features including a 3-foot touchscreen and seamless payment options.</h1>
            </div>
            <div className={`blue-border ${isVisibleEleven ? 'visible' : ''}`} ref={elevenRef}/>  
            <div className={`two-content-box ${isVisibleFour ? 'visible' : ''}`} ref={fourRef}>
              <h1 className="small-headline content-box-text-top black" >Seamless Installation & Maintenance</h1>
              <h1 className="small-description content-box-text-bottom" >Effortless setup backed by dedicated local support ensures uninterrupted service. We handle everything from restocking to permits, licensing, and sales tax remittance.</h1>
            </div>
          </div>
        </section>

        <section className="form" >
          <div className="mobile-scroll" />
          <div className="form-content" >
            <form className={`form-form ${isVisibleEight ? 'visible' : ''}`} ref={eightRef} >  
              <h1 className="small-headline white" >Contact Us</h1>    
              <input name="name" type="text" class="feedback-input" placeholder="Name" />   
              <input name="email" type="text" class="feedback-input" placeholder="Business Name" />
              <textarea name="text" class="feedback-input" placeholder="Reason For inquiry"></textarea>
              <input type="submit" value="SUBMIT"/>
            </form>
          </div>
        </section>

        <section className="four">
          <div className="mobile-scroll" />
          <div className="four-content" >
            <div className={`two-content-box ${isVisibleFive ? 'visible' : ''}`} ref={fiveRef}>
              <h1 className="small-headline content-box-text-top black" >Attractive Margins</h1>
              <h1 className="small-description content-box-text-bottom" >Enjoy profit margins ranging from $5 to $25 per product variant.</h1>
            </div>
            <div className={`blue-border ${isVisibleTwelve ? 'visible' : ''}`} ref={twelveRef}/>  
            <div className={`two-content-box ${isVisibleSix ? 'visible' : ''}`} ref={sixRef}>
              <h1 className="small-headline content-box-text-top black" >30-Day Trial</h1>
              <h1 className="small-description content-box-text-bottom" >Try Cloud Station risk-free. If you're not satisfied, we'll remove it the same day, no questions asked.</h1>
            </div>
          </div>
        </section>

        <section className="five">
          <div className="mobile-scroll" />
          <div className="five-content" >
            <div className={`two-content-box ${isVisibleSeven ? 'visible' : ''}`} ref={sevenRef}>
              <h1 className="small-headline content-box-text-top black" >Advertisements</h1>
              <h1 className="small-description content-box-text-bottom" >Leverage our international presence for maximum brand exposure. With our touch screen machines attracting massive foot traffic, it's the perfect platform for advertising your brand.</h1>
            </div>
          </div>
        </section>

        <section className="form-two" >
          <div className="mobile-scroll" />
          <div className="form-content" >
            <form className={`form-form ${isVisibleNine ? 'visible' : ''}`} ref={nineRef} >  
              <h1 className="small-headline white" >Career Opportunities</h1>    
              <input name="name" type="text" class="feedback-input" placeholder="Name" />   
              <input name="email" type="text" class="feedback-input" placeholder="Email Address" />
              <textarea name="text" class="feedback-input" placeholder="Phone Number"></textarea>
              <input type="submit" value="SUBMIT"/>
            </form>
          </div>
        </section>

      </>
    )
}