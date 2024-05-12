import React, { useEffect, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'

export default function Model(props) {

  const { camera, scene } = useThree()

  const icon = useRef()
  const controls = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  const cameraLoads = () => {
    gsap.to(camera.position, {
      duration: 5,
      x: 0,
      y: 0,
      z: 15,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
      cameraLoads();
  }, []);

  useLayoutEffect(() => {

    const cont = document.querySelector(".carousel");
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((char,i) => {

      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars'})

      gsap.from(text.chars, {
              scrollTrigger: {
                  trigger: char,
                  start: 'top bottom',
                  end: 'bottom center',
                  scrub: true,
              },
              opacity: 0.2,
              stagger: 0.1,
      })
  })

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;


      // FIRST


      tl

      .to(".one-content", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top 80%", // Adjust start to start later
          end: "bottom 100%",
          scrub: true,
          immediateRender: false,
        },
      })


      .to(icon.current.rotation, {
        y: Math.PI * 1,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: 3,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // SECOND

      .to(icon.current.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: -3,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(camera.position, {
        z: 11,
        y: 2,
        x: 5,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // FOUR

      .to(icon.current.rotation, {
        y: Math.PI * 3,
        scrollTrigger: {
          trigger: ".four",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: 3,
        scrollTrigger: {
          trigger: ".four",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(camera.position, {
        z: 15,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: ".four",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // FIVE

      .to(icon.current.rotation, {
        y: Math.PI * 4,
        scrollTrigger: {
          trigger: ".five",
          start: "top bottom",
          end: "btop top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: -3,
        scrollTrigger: {
          trigger: ".five",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      

    })
    

  }, [])

  const { nodes, materials } = useGLTF('./vend.glb')
  return (
    <>
    <OrbitControls target={ [ -5, 0, 0 ] } ref={controls} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
    <group ref={icon} {...props} dispose={null}>
      <mesh>
        <boxGeometry args={ [ 6, 10, 5 ] } />
        <meshStandardMaterial color={ "#ccc" } />
      </mesh>
    </group>
    </>
  )
}

useGLTF.preload('./vend.glb')