import * as THREE from "three";

interface Background {
  starsGroup: THREE.Group,
  sphere: THREE.Mesh
}

export const createStarsBackground = (scene: THREE.Scene): Background => {
  //load texture.
  const texture = new THREE.TextureLoader().load("8k_stars.jpg");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);

  //Create geometry and textured material for the background
  const geometry = new THREE.SphereGeometry(70, 64, 64);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide,
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  //Create stars group
  const starsGroup = new THREE.Group();
  const starsMaterial = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  const numStars = 2500;

  for (let i = 0; i < numStars; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    const radius = 70;

    const starGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const starMesh = new THREE.Mesh(starGeometry, starsMaterial);

    const x = Math.sin(phi) * Math.cos(theta) * radius;
    const y = Math.cos(phi) * radius;
    const z = Math.sin(phi) * Math.sin(theta) * radius;

    starMesh.position.set(x, y, z);

    starsGroup.add(starMesh);
  }

  scene.add(starsGroup);

  return {sphere, starsGroup};
};
