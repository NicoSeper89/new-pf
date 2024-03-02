import * as THREE from "three";

const Create3dCard = (
  width: number = 7,
  height: number = 9,
  radius: number = 0.5
): THREE.Mesh<THREE.ExtrudeGeometry, THREE.MeshStandardMaterial> => {
  const cardShape = new THREE.Shape();
  const x = 0;
  const y = 0;

  cardShape.moveTo(x + radius, y);
  cardShape.lineTo(x + width - radius, y);
  cardShape.quadraticCurveTo(x + width, y, x + width, y + radius);
  cardShape.lineTo(x + width, y + height - radius);
  cardShape.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius,
    y + height
  );
  cardShape.lineTo(x + radius, y + height);
  cardShape.quadraticCurveTo(x, y + height, x, y + height - radius);
  cardShape.lineTo(x, y + radius);
  cardShape.quadraticCurveTo(x, y, x + radius, y);

  const extrudeSettings = {
    depth: 0.5,
    bevelEnabled: true,
    bevelSegments: 32,
    steps: 42,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  const cardGeometry = new THREE.ExtrudeGeometry(cardShape, extrudeSettings);
  const cardMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.1,
    roughness: 1,
    envMapIntensity: 1,
    color: 0x000000,
  });

  const card = new THREE.Mesh(cardGeometry, cardMaterial);

  return card;
};

export default Create3dCard;
