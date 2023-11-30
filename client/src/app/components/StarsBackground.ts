import * as THREE from "three";

export const createStarsBackground = (scene: THREE.Scene): THREE.Group => {
    
  const starsGroup = new THREE.Group();
  const starsMaterial = new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });
  
  const numStars = 5500;
  
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

  return starsGroup;
};
