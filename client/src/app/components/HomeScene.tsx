"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { loadGLB } from "../utils/GltfModel";
import { createScene } from "../config/Rendering3D";

const HomeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { scene, renderer, camera } = createScene(canvasRef.current);

    // Add light to room
    const roomLight = new THREE.PointLight(new THREE.Color(50, 50, 50), 1);
    roomLight.position.set(1, 5, 1);
    roomLight.lookAt(3, 0, 3);

    scene.add(roomLight);

    //Add room model to scene of home.
    let roomModel: THREE.Object3D;
    let roomMixer: THREE.AnimationMixer;

    loadGLB({ path: "newPortfolioScene.glb", scene })
      .then(({ model: loadedModel, mixer: loadedMixer }) => {
        roomModel = loadedModel;
        roomMixer = loadedMixer;
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
      if (!roomModel || !roomMixer) return;

      const time = clock.getElapsedTime();

      roomModel.position.y = Math.cos(time) * 0.3;
      roomModel.rotation.z = Math.cos(time * 0.5) * 0.1;
      roomModel.rotation.x = Math.cos(time * 0.1) * 0.1;

      roomMixer.update(clock.getDelta());

      renderer.render(scene,camera);
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
