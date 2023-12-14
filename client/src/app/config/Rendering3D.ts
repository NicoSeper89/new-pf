import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const createScene = (
  canvasRef: HTMLCanvasElement
): {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
} => {
  //START SCENE AND CAMERA.
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(-12.5, 7, 20.5);

  //ADD ORBIT CONTROLS TO SCENE.
  const controls = new OrbitControls(camera, canvasRef);
  controls.target = new THREE.Vector3(-1.5, 2, -5);

  controls.enableDamping = true;
  controls.dampingFactor = 0.9;

  controls.minPolarAngle = Math.PI / 2.5;
  controls.maxPolarAngle = Math.PI / 2;

  controls.minAzimuthAngle = -Math.PI / 5;
  controls.maxAzimuthAngle = -Math.PI / 18;

  controls.minDistance = 23;
  controls.maxDistance = 30;

  controls.enablePan = false;

  //Start renderer and config.
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef,
    alpha: true,
    antialias: true,
    precision: "highp",
  });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);

  renderer.toneMappingExposure = 0;

  return { scene, renderer, camera, controls };
};
