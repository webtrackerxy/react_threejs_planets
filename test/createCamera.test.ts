import * as THREE from "three";
import createCamera from "../src/components/createCamera";

describe("createCamera", () => {
  describe("should create a THREE.PerspectiveCamera", () => {
    it("with default arguments", () => {
      const camera = createCamera();

      expect(camera.fov).toBeDefined();
      expect(camera.aspect).toBeDefined();
      expect(camera.near).toBeDefined();
      expect(camera.far).toBeDefined();
    });

    it("with specified arguments", () => {
      const fov = 70;
      const aspect = 1.5;
      const near = 5;
      const far = 10;

      const camera = createCamera(fov, aspect, near, far);

      expect(camera.fov).toBe(fov);
      expect(camera.aspect).toBeDefined();
      expect(camera.near).toBe(near);
      expect(camera.far).toBe(far);
    });
  });
});
