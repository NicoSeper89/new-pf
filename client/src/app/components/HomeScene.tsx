"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GltfModel from "./GltfModel";

const HomeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-4, 4, 3);
    camera.lookAt(new THREE.Vector3(-4.2, 4.1, 0));

    const light = new THREE.DirectionalLight(0x505050);
    light.position.set(0, 10, 10);
    light.intensity = 50;
    scene.add(light);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    /* const controls = new OrbitControls(camera, canvasRef.current);
    controls.target.set(0, 0, 0);
    controls.update(); */

    GltfModel("planoEscena.glb", scene);
    GltfModel("portal.glb", scene, {x: 0, y: 0, z: -5});

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  )
};

export default HomeScene;
