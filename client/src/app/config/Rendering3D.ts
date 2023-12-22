import * as THREE from "three";

export const createScene = (
  canvasRef: HTMLCanvasElement
): {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
} => {
  //START SCENE AND CAMERA.
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

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

  return { scene, renderer, camera };
};
