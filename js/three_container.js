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
const renderer = new THREE.WebGLRenderer({alpha : true});
const canvas = document.querySelector('.static_image')
canvas.appendChild(renderer.domElement)
// renderer.setClearColor(0x5190B8)
renderer.setSize( 1150, 650 );

// --Controls
const controls = new OrbitControls( camera, canvas )

// --Objects
const geometry = new THREE.BoxGeometry(15, 32, 16)
const material = new THREE.MeshStandardMaterial( {color : '#8F72E3'})
const box = new THREE.Mesh( geometry, material)
box.position.set(-20,0,0)
scene.add(box)

const geometry2 = new THREE.TorusGeometry(10, 3, 16, 100)
const material2 = new THREE.MeshStandardMaterial( {color : 'cyan'})
const sphere = new THREE.Mesh( geometry2, material2)
sphere.position.set(20,0,0)
scene.add(sphere)

// --Lights
const light = new THREE.AmbientLight(0xffffff, .5)
scene.add(light)

// --Render Now
function animate(){
    // requestAnimationFrame(animate);
    renderer.render(scene, camera)
    sphere.rotation.x += .005
    box.rotation.x += .005

    controls.update()

}

renderer.setAnimationLoop(animate)