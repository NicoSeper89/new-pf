"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { loadGLB } from "../utils/GltfModel";
import { createScene } from "../config/Rendering3D";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const HomeScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { scene, renderer, camera } = createScene(canvasRef.current);

    camera.position.set(-12, 3, 12);
    camera.lookAt(-4, 2, 0);

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

    const spheres = new THREE.Group();

    const octahedronGeometry = new THREE.OctahedronGeometry();
    const wireframeGeometry = new THREE.WireframeGeometry(octahedronGeometry);
    const material = new THREE.LineBasicMaterial({
      color: 0x1f1f1f,
      opacity: 0.6,
      transparent: true,
    });

    for (let i = 0; i < 1000; i++) {
      const wireframe = new THREE.LineSegments(wireframeGeometry, material);

      wireframe.position.y = Math.random() * 150 - 100;
      wireframe.scale.x =
        wireframe.scale.y =
        wireframe.scale.z =
          Math.random() * 4;

      spheres.add(wireframe);
    }

    spheres.rotation.y = 0.2;
    scene.add(spheres);

    /* const controls = new OrbitControls(camera, renderer.domElement); */

    const animate = () => {
      requestAnimationFrame(animate);
      if (!roomModel || !roomMixer) return;

      const time = clock.getElapsedTime();
      /*   controls.update(); */
      roomModel.position.y = Math.cos(time) * 0.3;
      roomModel.rotation.z = Math.cos(time * 0.5) * 0.1;
      roomModel.rotation.x = Math.cos(time * 0.1) * 0.1;

      for (let i = 0, il = spheres.children.length; i < il; i++) {
        const sphere = spheres.children[i];

        sphere.position.x = 100 * Math.cos(0.01 * time + i) + 115;
        sphere.position.z = 100 * Math.sin(0.01 * time + i * 1.1) - 115;

        sphere.rotation.z += 0.01;
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      }

      roomMixer.update(clock.getDelta());

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <>
      <canvas className="absolute" ref={canvasRef}></canvas>
    </>
  );
};

export default HomeScene;
