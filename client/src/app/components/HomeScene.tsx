"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { loadGLB } from "../utils/GltfModel";
import { createStarsBackground } from "../components/StarsBackground";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

    const ambientLight = new THREE.AmbientLight(
      new THREE.Color(23, 23, 23),
      0.02
    );
    scene.add(ambientLight);

    const roomLight = new THREE.PointLight(new THREE.Color(50, 50, 50), 2);
    roomLight.position.set(1, 5, 1);
    roomLight.lookAt(3, 0, 3);

    scene.add(roomLight);

    const texture = new THREE.TextureLoader().load("8k_stars.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3); 

    const geometry = new THREE.SphereGeometry(70, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.BackSide,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

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

    const starsGroup = createStarsBackground(scene);

    const controls = new OrbitControls(camera, canvasRef.current);
    controls.update();

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
      if(!model || !mixer) return;
      sphere.rotation.y -= 0.0001;
      starsGroup.rotation.y -= 0.0004;
      starsGroup.rotation.z -= 0.0006;
      starsGroup.children.forEach(star => {
        if (Math.random() > 0.995) {
          star.visible = !star.visible;
        }
      })
      renderer.render(scene, camera);

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
