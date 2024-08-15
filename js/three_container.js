import * as THREE from 'https://cdn.skypack.dev/three@0.135.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.135.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '//cdn.skypack.dev/three@0.130.1/examples/jsm/controls/OrbitControls.js';
// --Scene
const scene = new THREE.Scene();

// --Camera
const fov = 75
const aspect = window.innerWidth /window.innerHeight
const near = 0.1
const far = 1000

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 50

// --Renderer
const renderer = new THREE.WebGLRenderer({alpha : true, antialias : true});
const canvas = document.querySelector('.static_image')
canvas.appendChild(renderer.domElement)
// renderer.setClearColor(0x5190B8)
renderer.setSize( canvas.clientWidth, canvas.clientHeight );

renderer.gammaOutput = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows

// --Controls
const controls = new OrbitControls( camera, canvas )
controls.enableZoom = false

// --Objects
// const geometry = new THREE.BoxGeometry(15, 32, 16)
// const material = new THREE.MeshStandardMaterial( {color : '#8F72E3'})
// const box = new THREE.Mesh( geometry, material)
// box.position.set(-20,0,0)
// scene.add(box)

// const geometry2 = new THREE.TorusGeometry(10, 3, 16, 100)
// const material2 = new THREE.MeshStandardMaterial( {color : 'cyan'})
// const sphere = new THREE.Mesh( geometry2, material2)
// sphere.position.set(20,0,0)
// scene.add(sphere)

// --Lights
const light = new THREE.AmbientLight(0xffffff, .5)
scene.add(light)

// Importing A Model

let tp_model = []
let value = 10;
const loader = new GLTFLoader();
loader.load('/public/tecpen.glb', function ( gltf ){
    let model = gltf.scene;
    model.position.y = -20;
    model.position.z = -10;
    model.scale.set(value, value, value);
    model.rotation.y = -Math.PI/2;
    tp_model = model;
    scene.add(model)

})

// --Render Now
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
    // sphere.rotation.x += .005
    // box.rotation.x += .005
    tp_model.rotation.y += 0.005

    controls.update()

}

animate()
// renderer.setAnimationLoop(animate)

function resizeRenderer() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height);
}

// Initial call to set renderer size based on current canvas size
resizeRenderer();

// Call resizeRenderer() whenever the window is resized
window.addEventListener('resize', resizeRenderer);