

/*import {
    Camera,
    Group,
    Scene,
    } from "../vendor/three/build/three.module.js";
    
    import { OrbitControls } from "../vendor/three/examples/jsm/controls/OrbitControls.js";
    import { GLTFLoader } from "../vendor/three/examples/jsm/loaders/GLTFLoader.js"; 
*/
/*
import { Camera, Group, Scene } from "https://cdn.skypack.dev/three@0.132.2";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js?module";
*/

import {
  BoxBufferGeometry,
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  HemisphereLight
} from "https://cdn.skypack.dev/three@0.152.0";


// Get a reference to the container element that will hold our scene

// const container = document.body.querySelector('#scene-container');
const container = document.querySelector('scene-container');
console.log("container: " + container);

// create a Scene
const scene = new Scene();

// Set the background color
//scene.background = new Color('skyblue');

const width = window.innerWidth, height = window.innerHeight;

// Create a camera
const fov = 75; // AKA Field of View
const aspect = width / height;
const near = 0.1; // the near clipping plane
const far = 1000; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
// camera.position.set(0, 0, 10);
camera.position.z = 1;

// create a geometry
const geometry = new BoxGeometry(0.2, 0.2, 0.2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();
material.color.setHex(0x00FF00);


// create a Mesh containing the geometry and material
const mesh = new Mesh(geometry, material);

// create world light and add to scene
const light = new HemisphereLight('#FFFFFF', '#757575', 1.7);
scene.add(light);

// add the mesh to the scene
scene.add(mesh);

// create the renderer
const renderer = new WebGLRenderer({ antialias: true });

// next, set the renderer to the same size as our container element
renderer.setSize(width, height);
//console.log("container.appendChild: " + container.getAttributeNames);
console.log("renderer.domElement: " + renderer.domElement);
//container.appendChild(renderer.domElement);
document.body.appendChild(renderer.domElement);

renderer.setAnimationLoop(animation);


// finally, set the pixel ratio so that our scene will look good on HiDPI displays
//renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
// animation
function animation(time) {

  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;
  // render, or 'create an animated image', of the scene
  renderer.render(scene, camera);
}
animation();