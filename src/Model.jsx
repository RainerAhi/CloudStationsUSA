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


      // FIRST TO SECOND


      tl
      .to(icon.current.rotation, {
        y: Math.PI * 2,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(controls.current.target, {
        x: 4,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      // .to(icon.current.rotation, {
      //   y: Math.PI * 4,
      //   scrollTrigger: {
      //     trigger: ".three",
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: true,
      //     immediateRender: false,
      //   },
      // })

      

    })
    

  }, [])

  const { nodes, materials } = useGLTF('./vend.glb')
  return (
    <>
    <OrbitControls target={ [ -4, 0, 0 ] } ref={controls} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ true } enablePan={ false } />
    <group ref={icon} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CubeSlice003_Material001_0.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_elements_cena001_0.geometry}
        material={materials['elements_cena.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_elements_cena_0.geometry}
        material={materials.elements_cena}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018_Material003_0.geometry}
        material={materials['Material.003']}
      />
    </group>
    </>
  )
}

useGLTF.preload('./vend.glb')