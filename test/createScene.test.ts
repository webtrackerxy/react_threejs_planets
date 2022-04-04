import * as THREE from "three";
import createScene from "../src/components/createScene";

describe("createScene", () => {
  it("should create a THREE.Scene", () => {
    const scene = createScene();

// Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and then the possible Planet Nine.

    // 1. Sun
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry( 30, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00FFFF, wireframe: false } )
    );
    sun.name  = "Sun"
    scene.add(sun)

    expect(scene.children.length).toBe(1);
    expect(scene.children[0]).toBe(sun);

 
    // 2. Venus
    const venus = new THREE.Mesh(
      new THREE.SphereGeometry( 30, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00FFFF, wireframe: false } )
    );
    venus.name  = "Venus"
    scene.add( venus );

    expect(scene.children.length).toBe(2);
    expect(scene.children[1]).toBe(venus);

    // 3. Mercury
    const mercury = new THREE.Mesh(
      new THREE.SphereGeometry( 30, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00FFFF, wireframe: false } )
    );
    mercury.name  = "Mercury"
    scene.add(mercury)

    expect(scene.children.length).toBe(3);
    expect(scene.children[2]).toBe(mercury);

    // 4. Earth
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry( 30, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00FFFF, wireframe: false } )
    );
    earth.name  = "Earth"
    scene.add(earth)

    expect(scene.children.length).toBe(4);
    expect(scene.children[3]).toBe(earth);

    // 5. Mars
    const mars = new THREE.Mesh(
      new THREE.SphereGeometry( 20, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00FFCC, wireframe: false } )
    );
    mars.name  = "Mars"
    scene.add( mars );
    
    expect(scene.children.length).toBe(5);
    expect(scene.children[4]).toBe(mars);

    // 6. Jupiter
    const jupiter = new THREE.Mesh(
      new THREE.SphereGeometry( 70, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00CCCC, wireframe: false } )
    );
    jupiter.name  = "Jupiter"
    scene.add( jupiter );

    expect(scene.children.length).toBe(6);
    expect(scene.children[5]).toBe(jupiter);

    // 7. Saturn
    const saturn = new THREE.Mesh(
      new THREE.SphereGeometry( 70, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0xFFFF00, wireframe: false } )
    );
    saturn.name  = "Saturn"
    scene.add( saturn );

    expect(scene.children.length).toBe(7);
    expect(scene.children[6]).toBe(saturn);

    // 8. Uranus
    const uranus = new THREE.Mesh(
      new THREE.SphereGeometry( 10, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0xFFF000, wireframe: false } )
    );
    uranus.name  = "Uranus"
    scene.add( uranus );

    expect(scene.children.length).toBe(8);
    expect(scene.children[7]).toBe(uranus);

    // 9. Neptune
    const neptune = new THREE.Mesh(
      new THREE.SphereGeometry( 10, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: false } )
    );
    neptune.name  = "Neptune"
    scene.add( neptune );

    expect(scene.children.length).toBe(9);
    expect(scene.children[8]).toBe(neptune);

  });
});
