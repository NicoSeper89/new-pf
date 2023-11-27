import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface GLBLoadParams {
  path: string;
  position?: THREE.Vector3;
  scene: THREE.Scene;
}

export const loadGLB = ({ path, position, scene }: GLBLoadParams) => {
  return new Promise<{ model: THREE.Object3D; mixer: THREE.AnimationMixer }>(
    (resolve, reject) => {
      const loader = new GLTFLoader();

      loader.load(
        path,
        (gltf) => {
          const model = gltf.scene;
          if (position) {
            model.position.copy(position);
          }
          scene.add(model);

          const animations = gltf.animations || [];
          const mixer = new THREE.AnimationMixer(model);
          animations.forEach((clip) => {
            mixer.clipAction(clip).play();
          });

          resolve({ model, mixer });
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    }
  );
};