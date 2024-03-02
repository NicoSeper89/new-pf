"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { createScene } from "../../utils/Rendering3D";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import Create3dCard from "./create3dCard";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let exrCubeRenderTarget: THREE.WebGLRenderTarget<THREE.Texture>;

const SkillsScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const params = {
    envMap: "EXR",
    roughness: 0.1,
    metalness: 0.5,
    exposure: 0.5,
    debug: false,
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // ---------- Add scene, renderer and camera ---------- //

    const { scene, renderer, camera } = createScene(canvasRef.current);

    camera.position.set(0, 5, 16);

    // ---------- Add camera movement controls ---------- //

    const controls = new OrbitControls(camera, renderer.domElement);

    // ---------- Add lights to scene ---------- //

    const light = new THREE.DirectionalLight("#aaaaaa", 1);
    light.position.set(4.8, 4.8, 4.8);
    light.lookAt(0, 0, 0.5);
    scene.add(light);

    // --------- Add two planes to the scene and position them for background ---------- //

    const planeGeometry = new THREE.PlaneGeometry(180, 60);

    const plane_1 = new THREE.Mesh(planeGeometry);
    plane_1.rotation.x = -Math.PI / 2;
    const plane_2 = new THREE.Mesh(planeGeometry);
    plane_2.position.setY(30);
    plane_2.position.setZ(-30);

    scene.add(plane_1);
    scene.add(plane_2);

    // --------- Set background plane material ---------- //

    let material = new THREE.MeshStandardMaterial({
      color: 0x55cc88,
      metalness: 0.2,
      roughness: 0.9,
      transparent: true,
      opacity: 1,
      envMapIntensity: 1,
    });

    plane_1.material = material;
    plane_2.material = material;

    // --------- create info cards of scene ---------- //

    const card = Create3dCard(undefined, undefined, 1);
    scene.add(card);

    // --------- load texture for cards ---------- //

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    THREE.DefaultLoadingManager.onLoad = function () {
      pmremGenerator.dispose();
    };

    new EXRLoader().load("textures/piz_compressed.exr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
      card.material.envMap = exrCubeRenderTarget
        ? exrCubeRenderTarget.texture
        : null;
      card.material.needsUpdate = true;
    });

    // --------- load font for cards ---------- //

    const loaderFont = new FontLoader();
    loaderFont.load(
      "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
      (font) => {
        // create card text geometry
        const texto =
          "- React \n- React Native \n- Next.JS \n- Tailwind \n- Bootstrap \n- Chakra UI \n- Redux \n- ThreeJs \n- Framer Motion";
        const textoGeometry = new TextGeometry(texto, {
          font: font,
          size: 0.5,
          height: 0.001,
          curveSegments: 4,
          bevelEnabled: true,
          bevelThickness: 0.05,
          bevelSize: 0.01,
          bevelSegments: 1,
        });

        // create card text material
        const mat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
        });

        // create card text mesh
        const textoMesh = new THREE.Mesh(textoGeometry, mat);
        textoMesh.position.z = 1;
        textoMesh.position.x = 1;
        textoMesh.position.y = 7.5;

        // add text to scene
        scene.add(textoMesh);
      },
      undefined,
      (error) => {
        console.log(error);
      }
    );

    // --------- focus camera and controller pibot point ---------- //

    controls.target.set(card.position.x + 2.5, 5, card.position.z);
    camera.lookAt(card.position.x + 3.5, 5, card.position.z);
    controls.update();

    // --------- update camera and renderer with the resize event ---------- //

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // --------- ANIMATIONS ---------- //

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // --------- Clear resize event --------- //

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas className="absolute" ref={canvasRef}></canvas>
    </>
  );
};

export default SkillsScene;
