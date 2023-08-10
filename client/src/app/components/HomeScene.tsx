"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
    camera.position.set(10, 5, -10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(camera, canvasRef.current);
    controls.target.set(0, 0, 0);
    controls.update();

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0.5, 0); 
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default HomeScene;
