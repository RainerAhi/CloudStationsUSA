import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'

export default function Model(props) {

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobileDevice)

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

  const cameraLoadsMobile = () => {
    gsap.to(controls.current.target, {
      duration: 5,
      y: 2,
      ease: 'power3.out',
    });
  };

  useEffect(() => {
    cameraLoads();
    if (isMobileDevice) {
      cameraLoadsMobile();
    }
  }, [isMobileDevice]);

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
        x: Math.PI * 2,
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // .to(controls.current.target, {
      //   x: isMobile ? 0 : 3,
      //   scrollTrigger: {
      //     trigger: ".two",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      // SECOND

      .to(controls.current.target, {
        y: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(icon.current.rotation, {
        y: isMobile ? Math.PI * 4.15 : Math.PI * 4.15,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: isMobile ? 0 : 3,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(camera.position, {
        x: 0,
        y: -5,
        z: 15,
        scrollTrigger: {
          trigger: ".three",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // FORM

      .to(icon.current.rotation, {
        y: isMobile ? Math.PI * 5 : Math.PI * 5,
        scrollTrigger: {
          trigger: ".form",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: 0,
        scrollTrigger: {
          trigger: ".form",
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
          trigger: ".form",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })


      // THIRD

      .to(icon.current.rotation, {
        y: isMobile ? Math.PI * 6 : Math.PI * 6,
        scrollTrigger: {
          trigger: ".four",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: isMobile ? 0 : -3,
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

      // FOUR

      .to(icon.current.rotation, {
        y: isMobile ? Math.PI * 7 : Math.PI * 8.15,
        scrollTrigger: {
          trigger: ".five",
          start: "top bottom",
          end: "btop top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: isMobile ? 0 : 3,
        scrollTrigger: {
          trigger: ".five",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(camera.position, {
        x: 0,
        y: -5,
        z: 15,
        scrollTrigger: {
          trigger: ".five",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // FORM TWO

      .to(icon.current.rotation, {
        y: isMobile ? Math.PI * 8 : Math.PI * 9,
        scrollTrigger: {
          trigger: ".form-two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: 0,
        scrollTrigger: {
          trigger: ".form-two",
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
          trigger: ".form-two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      

    })
    

  }, [])

  const { nodes, materials } = useGLTF('./machine.glb')
  return (
    <>
    <OrbitControls target={ [ isMobileDevice ? 0 : -4, 0, 0 ] } ref={controls} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
    <group ref={icon} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3D002'].geometry}
        material={materials['Anodized Aluminum Rough Black #1']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3D003'].geometry}
        material={materials['Anodized Aluminum Polished Black #1']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3D005'].geometry}
        material={materials['Anodized Aluminum Rough Black #1']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3D007'].geometry}
        material={materials['Anodized Aluminum Rough Black #1']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3D009'].geometry}
        material={materials['Anodized Aluminum Rough Black #1']}
      />
    </group>
    </>
  )
}

useGLTF.preload('./machine.glb')