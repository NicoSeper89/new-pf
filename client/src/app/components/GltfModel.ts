import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = (src: string, scene: THREE.Scene, pos?: {x: number, y:number, z:number}) => {

    const loader = new GLTFLoader();

    loader.load(
      src,
      function (gltf) {
        const model = gltf.scene;

        if (pos) {
          model.translateX(pos.x);
          model.translateY(pos.y);
          model.translateZ(pos.z);
        }

        scene.add(model); 
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

  return null;
};

export default GltfModel;
