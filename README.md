## Generate WebGL animation using threeJS libraries
This is a sample Oracle VisualBuilder Application that demonstrates how to create WebGL animation (rotating cube) leveraging threejs libraries (https://threejs.org/).

<img width="250" alt="Screenshot 2024-03-28 at 12 22 13" src="https://github.com/johnkarasoulos/VisualBuilderwebgl3D/assets/25766024/3b7ca8b4-363a-483e-8049-f47c335cbbe5">

Into the main.js file of my web/mobile appliciation, I've included the following code that: 
- imports the libraries,
- create the scene,
- set the background,
- create a camera,
- create the geometry,
- create a default basic material,
- create a Mesh containing the geometry and material,
- create world light and add to scene,
- add the mesh to the scene,
- create the renderer,
- set the renderer to the same size as our container element ,
- add the animation

```
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
```

### From github repository to Oracle VisualBuilder application. 
If you wish to deploy the sample source code into your own Visual Builder Platform, you can apply the following steps.
1. Connect to your Oracle Visual Builder Studio Instance
2. Into an existing Project OR Create a new project --> create a new git repository by importing the existing public GitHub repository.
   ![Screenshot 2024-03-25 at 12 33 33](https://github.com/johnkarasoulos/aircraftBlockchain/assets/25766024/235cf9ae-c01f-449a-8764-96fdda1e543b)

3. Create a new Workspace using the button "Clone From Git" where you are selecting the Repository Name, the Branch , the Development Environment and you are providing the name of the Workspace Name.
4. 
<img width="450" alt="Screenshot 2024-03-28 at 12 23 57" src="https://github.com/johnkarasoulos/VisualBuilderwebgl3D/assets/25766024/e0993a76-1ff2-40f5-9448-0643960e5ce7">

5. You are redirected to the new VisualBuilder instance assigned to this workspace and you can start working.  
