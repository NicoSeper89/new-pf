"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { loadGLB } from "../utils/GltfModel"

const HomeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(-9, 4, 16);
    camera.lookAt(new THREE.Vector3(4, 2, -27));

    const envLight = new THREE.AmbientLight(new THREE.Color(23, 23, 23), 0.05);
    scene.add(envLight);

    const light = new THREE.RectAreaLight(new THREE.Color(15, 15, 15), 5);
    light.position.set(-20, 23, 20);
    light.lookAt(new THREE.Vector3(0, 2, 0));
    scene.add(light);


    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      precision: "highp",
    });
    renderer.setPixelRatio(
      window.devicePixelRatio ? window.devicePixelRatio : 1
    );
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);

    let model: THREE.Object3D;
    let mixer: THREE.AnimationMixer;

    loadGLB({ path: "newPortfolioScene.glb", scene })
      .then(({ model: loadedModel, mixer: loadedMixer }) => {
        model = loadedModel;
        mixer = loadedMixer;
      })
      .catch((error) => {
        console.error(error);
      });

    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      if (model && mixer) {

        const deltaTime = clock.getDelta();
        mixer.update(deltaTime);
       /*  model.rotation.y += 0.005; */
        renderer.render(scene, camera);
      }
    };

    animate();
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default HomeScene;
