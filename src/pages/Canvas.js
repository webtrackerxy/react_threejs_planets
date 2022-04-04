import React, { Component, Fragment } from "react";
import * as THREE from "three";
import { CanvasContext } from "../contexts/context";
import earthmap1k from "../assets/earthmap1k.jpg";
import sun2k from "../assets/sun2k.jpg";
import mercury2k from "../assets/mercury2k.jpg";

const  Canvas = (props) => {

  // State
  const { useRef, useEffect, useContext } = React;
  const mount = useRef(null);

  const { canvasState, setCanvasState } = useContext(CanvasContext);

  // three.js stuffs
  let SCREEN_WIDTH = window.innerWidth;
  let SCREEN_HEIGHT = window.innerHeight;
  let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

  let scene, renderer, mesh;
  let activeCamera, cameraPerspective, cameraOrtho;
  const frustumSize = 2000;

  scene = new THREE.Scene();
  var ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  scene.add( ambientLight );
  
  // 3D View
  cameraPerspective = new THREE.PerspectiveCamera( 50,  aspect, 150, 1000 );

   // 2D View
  cameraOrtho = new THREE.OrthographicCamera(  frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 150, 1000 );

  cameraOrtho.rotation.y = Math.PI;
  cameraPerspective.rotation.y = Math.PI;

  // Rendering
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

  useEffect(() => {

    if (canvasState.view == "2D") {
      activeCamera = cameraOrtho
    }else{ 
      activeCamera = cameraPerspective
    } 

    // Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and then the possible Planet Nine.

    // 1. Sun
    var geometry   = new THREE.SphereGeometry(100, 16, 8)
    var material  = new THREE.MeshPhongMaterial()
    var sun = new THREE.Mesh(geometry, material)
    sun.name  = "Sun"
    scene.add(sun)
    sun.material.map  = THREE.ImageUtils.loadTexture(sun2k)
    sun.position.x = 0
    sun.position.y = 0
    sun.position.z = 0
 
    // 2. Venus
    const venus = new THREE.Mesh(
      new THREE.SphereGeometry( 30, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00FFFF, wireframe: false } )
    );
    venus.name  = "Venus"
    scene.add( venus );

    // 3. Mercury
    var geometry   = new THREE.SphereGeometry(30, 16, 8)
    var material  = new THREE.MeshPhongMaterial()
    var mercury = new THREE.Mesh(geometry, material)
    mercury.name  = "Mercury"
    scene.add(mercury)
    mercury.material.map  = THREE.ImageUtils.loadTexture(mercury2k)

    // 4. Earth
    var geometry   = new THREE.SphereGeometry(60, 16, 8)
    var material  = new THREE.MeshPhongMaterial()
    var earth = new THREE.Mesh(geometry, material)
    earth.name  = "Earth"
    scene.add(earth)
    earth.material.map  = THREE.ImageUtils.loadTexture(earthmap1k)


    // 5. Mars
    const mars = new THREE.Mesh(
      new THREE.SphereGeometry( 20, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00FFCC, wireframe: false } )
    );
    mars.name  = "Mars"
    scene.add( mars );
    
    // 6. Jupiter
    const jupiter = new THREE.Mesh(
      new THREE.SphereGeometry( 70, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00CCCC, wireframe: false } )
    );
    jupiter.name  = "Jupiter"
    scene.add( jupiter );

    // 7. Saturn
    const saturn = new THREE.Mesh(
      new THREE.SphereGeometry( 70, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0xFFFF00, wireframe: false } )
    );
    saturn.name  = "Saturn"
    scene.add( saturn );

    // 8. Uranus
    const uranus = new THREE.Mesh(
      new THREE.SphereGeometry( 10, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0xFFF000, wireframe: false } )
    );
    uranus.name  = "Uranus"
    scene.add( uranus );

    // 9. Neptune
    const neptune = new THREE.Mesh(
      new THREE.SphereGeometry( 10, 16, 8 ),
      new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: false } )
    );
    neptune.name  = "Neptune"
    scene.add( neptune );

    // Set the position 
    sun.position.z = 1000;
    venus.position.z = 2000;
    mercury.position.z = 2050;
    earth.position.z = 2100;
    mars.position.z = 2200;
    jupiter.position.z = 2509;
    saturn.position.z = 2850;
    uranus.position.z = 2900;
    neptune.position.z = 2950;

    renderer.autoClear = false;

    const onDocumentMouseDown = (event) => {

      var raycaster = new THREE.Raycaster(); // create once
      var mouse = new THREE.Vector2(); // create once

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, activeCamera);
      var intersects = raycaster.intersectObjects(scene.children, false);

      if (intersects.length > 0) {

        setCanvasState({
          selected_object: intersects[0],
          current_page : "details"
        });
                
      }
    };

    const renderScene = () => {
      renderer.clear();
      renderer.render(scene, activeCamera);
    };

    const handleResize = () => {

      SCREEN_WIDTH = window.innerWidth;
      SCREEN_HEIGHT = window.innerHeight;
      aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

      renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

      cameraPerspective.aspect = aspect;
      cameraPerspective.updateProjectionMatrix();

      cameraOrtho.left = -  frustumSize * aspect / 2;
      cameraOrtho.right =  frustumSize * aspect / 2;
      cameraOrtho.top = frustumSize / 2;
      cameraOrtho.bottom = - frustumSize / 2;
      cameraOrtho.updateProjectionMatrix();

      renderScene();
    };

    const animate = () => {

      const r = Date.now() * 0.0005;

      //cameraPerspective.position.y = 100* Math.sin(  r );

      // circulation motion
      venus.position.x = 300 * Math.cos( 0.1* r );
      venus.position.y = 300 * Math.sin( 0.1* r );

      mercury.position.x = 400 * Math.cos(0.3* r );
      mercury.position.y = 400 * Math.sin( 0.3*r );

      earth.position.x = 500 * Math.cos( 0.4*r );
      earth.position.y = 500 * Math.sin( 0.4*r );

      mars.position.x = 600 * Math.cos( 0.5*r );
      mars.position.y = 600 * Math.sin( 0.5*r );

      saturn.position.x = 700 * Math.cos( 0.6* r );
      saturn.position.y = 700 * Math.sin( 0.6* r );

      jupiter.position.x = 800 * Math.cos( 0.7*r );
      jupiter.position.y = 800 * Math.sin( 0.7*r );

      uranus.position.x = 900 * Math.cos( 0.8*r );
      uranus.position.y = 900 * Math.sin( 0.8*r );

      neptune.position.x = 1000 * Math.cos( r );
      neptune.position.y = 1000 * Math.sin( r );

      activeCamera.far = 3000
      activeCamera.updateProjectionMatrix();

      renderScene();
      window.requestAnimationFrame(animate);

    };

 
    mount.current.appendChild(renderer.domElement);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", onDocumentMouseDown);

    requestAnimationFrame(animate);

    return () => {
      
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", onDocumentMouseDown);
      mount.current.removeChild(renderer.domElement);
      
    };
  }, [canvasState.view]);

  const onClick2D = () =>{

    setCanvasState({
      ...canvasState,
      view : "2D"
    });
  
  }

  const onClick3D = () =>{
      
    setCanvasState({
      ...canvasState,
      view : "3D"
    });
    
  }

  return (
    <div style={props.style}>
      <input type="submit" value="2D" onClick={onClick2D} />
      <input type="submit" value="3D" onClick={onClick3D} />
      <div className="canvas"  ref={mount}  />
    </div>

  );
};

export default Canvas