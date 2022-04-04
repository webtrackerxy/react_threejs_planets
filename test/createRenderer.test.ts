import * as THREE from "three";
import createRenderer from "../src/components/createRenderer";

describe("createRenderer", () => {
  // Hide THREE.WebGLRenderer warnings about unsupported extensions:
  const originalConsoleWarn = console.warn;
  beforeAll(() => {
    console.warn = (...args: any[]) => {
      if (!/THREE/.test(args[0])) {
        originalConsoleWarn.call(console, ...args);
      }
    };
  });

  it("should create a THREE.WebGLRenderer", () => {
    // TODO: Github Actions throws:
    // TypeError: Cannot read property 'getShaderPrecisionFormat' of undefined
    //    at new WebGLRenderer (node_modules/three/build/three.js:23553:13)
    //    at Object.createRenderer [as default] (src/createRenderer.ts:583:10)
    //    at Object.<anonymous> (test/createRenderer.test.ts:16:36)
    //
    // const renderer = createRenderer();
    // expect(renderer).toBeInstanceOf(THREE.WebGLRenderer);
  });
});
