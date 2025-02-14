// 3dScene.js
import * as THREE from 'https://cdn.skypack.dev/three@0.135.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.135.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '//cdn.skypack.dev/three@0.130.1/examples/jsm/controls/OrbitControls.js';

export function init3DScene(canvas) {
    // --Scene
    const scene = new THREE.Scene();

    // --Camera
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 50;

    // --Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});
    canvas.appendChild(renderer.domElement);

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows

    // --Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;

    // // --Lights
    // const light = new THREE.AmbientLight(0xffffff, 500);
    // scene.add(light);

    // Importing a Model
    let tp_model = [];
    let value = 8;
    const loader = new GLTFLoader();
    loader.load('/public/Fork.glb', function (gltf) {
        let model = gltf.scene;
        model.position.y = -15;
        // model.position.z = -15;
        model.scale.set(value, value, value);
        model.rotation.y = -Math.PI / 2;
        tp_model = model;
        scene.add(model);
    });

//    // --Create Glowing Effect
//     const glowMaterial = new THREE.MeshBasicMaterial({
//     color: 0x9b00ff,  // Purple color
//     emissive: 0x9b00ff, // Make it purple and emissive for the glow effect
//     transparent: true,
//     opacity: 0.4,
//     side: THREE.BackSide, // Ensures glow is visible from outside
// });

// const glowGeometry = new THREE.SphereGeometry(32, 32, 32);
// const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
// glowMesh.position.z = -20; // Same position as the model
// scene.add(glowMesh);

    // --Render Now
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        tp_model.rotation.y += 0.005;
        controls.update();
    }

    animate();

    // --Resize Renderer
    function resizeRenderer() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        renderer.setSize(width, height);
    }

    // Initial call to set renderer size based on current canvas size
    resizeRenderer();

    // Call resizeRenderer() whenever the window is resized
    window.addEventListener('resize', resizeRenderer);

    // Delay the fade-in of the canvas by 1 second (for example)
    setTimeout(() => {
        canvas.style.opacity = 1; // Set opacity to 1 after 1 second
    }, 1000); // Adjust time for desired delay
}
