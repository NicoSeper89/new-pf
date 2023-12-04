"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { loadGLB } from "../utils/GltfModel";
import { createStarsBackground } from "../components/StarsBackground";
import { createScene } from "../config/Rendering3D";

const HomeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { scene, renderer, camera, composer, controls} = createScene(canvasRef.current);

    //ADD ENVIROMENT LIGHT
    const ambientLight = new THREE.AmbientLight(
      new THREE.Color(23, 23, 23),
      0.005
    );
    scene.add(ambientLight);

    // Add light to room
    const roomLight = new THREE.PointLight(new THREE.Color(50, 50, 50), 1);
    roomLight.position.set(1, 5, 1);
    roomLight.lookAt(3, 0, 3);

    scene.add(roomLight);

    //add background to scene.
    const { sphere, starsGroup } = createStarsBackground(scene);

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

    //add text model to scene of home.
    let textModel: THREE.Object3D;
    let textMixer: THREE.AnimationMixer;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    scene.add(directionalLight);
    directionalLight.position.set(-10, 0, 5);

    loadGLB({ path: "text.glb", scene })
      .then(({ model: loadedModel, mixer: loadedMixer }) => {
        textModel = loadedModel;
        textMixer = loadedMixer;
        textModel.position.set(-10.5, 0, -5);
        directionalLight.target = textModel;
      })
      .catch((error) => {
        console.error(error);
      });

    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        composer.setSize(window.innerWidth, window.innerHeight);
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      if (!roomModel || !roomMixer) return;
      if (!textModel || !textMixer) return;

      sphere.rotation.y -= 0.0001;
      starsGroup.rotation.y -= 0.0004;
      starsGroup.rotation.z -= 0.0006;

      const time = clock.getElapsedTime();

      roomModel.position.y = Math.cos(time) * 0.3;
      textModel.position.y = Math.cos(time) * 0.3;

      controls.update();
      roomMixer.update(clock.getDelta());

      starsGroup.children.forEach((star) => {
        if (Math.random() > 0.995) {
          star.visible = !star.visible;
        }
      });
      composer.render();
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
