const createContext = require("gl");

import * as THREE from "three";
import { createCanvas } from "canvas";
import { window } from "./globals";

export default function createRenderer(options?: THREE.WebGLRendererParameters) {
  const context = createContext(1, 1);
  const canvas: HTMLCanvasElement = createCanvas(window.innerWidth, window.innerHeight) as any;

  // Mock function to avoid errors inside THREE.WebGlRenderer():
  canvas.addEventListener = function () {};

  return new THREE.WebGLRenderer({ context, canvas, ...options });
}
