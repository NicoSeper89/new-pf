"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { createScene } from "../../utils/Rendering3D";

import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";

let clock: THREE.Clock;

let water: Water;
let sun: THREE.Vector3;

let torusKnot: THREE.Mesh;

const params = {
  color: "#BBB",
  scale: 3,
  flowX: 10,
  flowY: 10,
};

const Water3DScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    //Scene, Render, Camera

    const { scene, renderer, camera } = createScene(canvasRef.current);

    //
    
    camera.position.set(-3.25, 3.75, 10);
    camera.lookAt(-3.25, 3.75, -100);


    // clock

    clock = new THREE.Clock();

    // mesh

    const torusKnotGeometry = new THREE.TorusKnotGeometry(3, 1, 256, 32);
    const torusKnotMaterial = new THREE.MeshNormalMaterial();

    torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    torusKnot.position.y = 4;
    torusKnot.scale.set(0.5, 0.5, 0.5);
    scene.add(torusKnot);

    // Sun

    sun = new THREE.Vector3();

    // water

    const waterGeometry = new THREE.PlaneGeometry(4000, 4000);

    water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "textures/waternormals.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xff0000,
      waterColor: 0xff0000,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });

    water.rotation.x = -Math.PI / 2;

    scene.add(water);

    // Skybox

    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;

    skyUniforms["turbidity"].value = 10;
    skyUniforms["rayleigh"].value = 100;
    skyUniforms["mieCoefficient"].value = 0.005;
    skyUniforms["mieDirectionalG"].value = 0.8;

    const parameters = {
      elevation: 2,
      azimuth: 180,
    };

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const sceneEnv = new THREE.Scene();

    let renderTarget: THREE.WebGLRenderTarget;

    function updateSun() {
      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);

      sun.setFromSphericalCoords(1, phi, theta);

      sky.material.uniforms["sunPosition"].value.copy(sun);
      water.material.uniforms["sunDirection"].value.copy(sun).normalize();

      if (renderTarget !== undefined) renderTarget.dispose();

      sceneEnv.add(sky);
      renderTarget = pmremGenerator.fromScene(sceneEnv);
      scene.add(sky);

      scene.environment = renderTarget.texture;
    }

    updateSun();

    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );

    const animate = () => {
      requestAnimationFrame(animate);

      water.material.uniforms["time"].value += 1.0 / 60.0;

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

export default Water3DScene;
