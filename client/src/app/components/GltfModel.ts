import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = (src: string, scene: THREE.Scene) => {

    const loader = new GLTFLoader();

    loader.load(
      src,
      function (gltf) {
        const plane = gltf.scene;
        scene.add(plane);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

  return null;
};

export default GltfModel;
