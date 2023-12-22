"use client";

import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { createScene } from "../config/Rendering3D";
import { AxesHelper, GridHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface Card {
  id: number;
  title: string;
  stacks: string[];
  links: string[];
  description: string;
  image: string;
}

interface CarouselProps {
  cards: Card[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [carouselCamera, setCarouselCamera] =
    useState<THREE.PerspectiveCamera | null>(null);
  const [carouselScene, setCarouselScene] = useState<THREE.Scene | null>(null);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { scene, renderer, camera } = createScene(canvasRef.current);

    camera.position.set(0, 3, 40);
    camera.lookAt(0, 3, 0);

    /*  const axesHelper = new AxesHelper(20);
    scene.add(axesHelper);

    const gridHelper = new GridHelper(50, 10);
    scene.add(gridHelper); */

    // Añadir una luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 8);
    directionalLight.position.set(5, 20, 20);
    directionalLight.lookAt(0, 0, 0);
    scene.add(directionalLight);

    // Añadir una luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 2;
    scene.add(ambientLight);

    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );

    const geometry = new THREE.BoxGeometry(10, 6, 0.2);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.1, // Reducir la rugosidad para hacerlo más suave
      metalness: 0.9, // Aumentar la metalicidad para un aspecto más reflectante
      clearcoat: 1.0, // Añadir una capa transparente para simular brillo
      clearcoatRoughness: 0.1, // Rugosidad de la capa transparente
      reflectivity: 1.0, // Aumentar la reflectividad para más brillo
    });
    const groupCards = new THREE.Group();

    const numCubes = 8;
    const radius = 20;

    for (let index = 0; index < numCubes; index++) {
      const angle = (index / numCubes) * Math.PI * 2;

      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);

      const cube = new THREE.Mesh(geometry, material);

      cube.position.set(x, 3, z); 
      cube.lookAt(0, 3, 0); 

      groupCards.add(cube);
    }

    scene.add(groupCards);

    /* 
    new OrbitControls(camera, renderer.domElement); */

    setCarouselCamera(camera);
    setCarouselScene(scene);

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  const handleRotate = (direction: "left" | "right") => {
    if (!carouselCamera || !carouselScene) return;

    setCurrentCard((prev) => {
      
      const angle = (prev + 1 / 8) * Math.PI * 2;

      const x = 40 * Math.cos(angle);
      const z = 40 * Math.sin(angle);

      carouselCamera.position.set(x, 3, z); 
      carouselCamera.lookAt(0, 3, 0); 

      return (prev - 1 + cards.length) % cards.length;
    });

  };

  return (
    <>
      <canvas
        className="absolute bg-gradient-to-bl from-slate-950 to-slate-800 w-full h-screen"
        ref={canvasRef}
      ></canvas>
      <div className="absolute bg-green-500 self-start left-10 p-2 rounded-lg">
        <button
          onClick={() => {
            handleRotate("left");
          }}
        >
          Prev
        </button>
      </div>
      <div className="absolute bg-red-500 self-end right-10 p-2 rounded-lg">
        <button
          onClick={() => {
            handleRotate("right");
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;
