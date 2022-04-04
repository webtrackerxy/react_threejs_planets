import * as THREE from "three";
import { window } from "./globals";

export default function createCamera(
  
  fov = 50,
  aspect = window.innerWidth / window.innerHeight,
  near = 1,
  far = 10000
  
) {

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(1, 1, 1);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  return camera;
}
