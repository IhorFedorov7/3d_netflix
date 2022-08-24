import * as THREE from 'three';
import Balloons from './modules/Balloons/Balloons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as slFunctions from './modules/Slider/slider.js';
import * as animFunctions from './modules/Animation/Animation.js';


let scene,
    light,
    camera,
    renderer,
    loader;

const canvas = document.querySelector('.webgl');

// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 60,
    aspect = window.innerWidth / window.innerHeight,
    near = 1,
    far = 1000;

// sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight   
};

light = new THREE.SpotLight(0xffffff);

light.castShadow = true;
light.position.set( -440, -160, 100 );

scene.add(light);

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 8;
camera.position.x = 0;
camera.position.y = 0;

scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// renderer setup
renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
});

renderer.autoClear = false;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0.0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const balloons = new Balloons();

balloons.mesh.scale.set(0.005, 0.005, 0.005);
balloons.mesh.position.x = 2;
balloons.mesh.position.y = -0.8;

loader = new THREE.TextureLoader();
// ./../dist/
const blue = loader.load('./../dist/img/canvas/blur-1.png');
const yellow = loader.load('./../dist/img/canvas/blur-2.png');

const blueGeometry = new THREE.BufferGeometry;
const yellowGeometry = new THREE.BufferGeometry;
// const blueNum = 50;

const funRendonGeometry = ( Geom, num ) => {
    const colorArray = new Float32Array(num * 3);

    for (let i = 0; i < num * 3; i++) {

        colorArray[i] = (Math.random() - 0.4) * (Math.random() * 50);
    };

    Geom.setAttribute('position', new THREE.BufferAttribute(colorArray, 3));
};

funRendonGeometry( blueGeometry, 50 );
funRendonGeometry( yellowGeometry, 30 );

const materialBlue = new THREE.PointsMaterial({
    size: 0.5,
    map: blue,
    transparent: true
});

const materialYellow = new THREE.PointsMaterial({
    size: 0.5,
    map: yellow,
    transparent: true
});

const blueMech = new THREE.Points(blueGeometry, materialBlue);
const yellowMech = new THREE.Points(yellowGeometry, materialYellow);

scene.add(balloons.mesh, blueMech, yellowMech);

// Mouse

document.addEventListener('mousemove', animateMech);

let mouseX = 0,
    mouseY = 0;

function animateMech(event) {

    mouseY = event.clientY;
    mouseX = event.clientX;
};

// window resize
window.addEventListener(
    'resize',
    () => {

        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        
        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    },
    false
);

// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

scene.add(ambientLight);

const animate = () => {
    
    balloons.mesh.rotation.y += 0.003;
    blueMech.rotation.x = mouseX * (0.00008); 
    blueMech.rotation.y = mouseX * (0.00008); 
    yellowMech.rotation.x = mouseY * (0.00008);
    yellowMech.rotation.y = mouseY * (0.00008);

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
};

animate();


animFunctions.Animations();

slFunctions.Slider([
    {
        order: 1,
        act: {
            'phone': 1.5,
            'tablets': 2.5,
            'netbook': 3.5,
            'PC': 4.5,
        },
        type: 'SA',
        swipe: true,
        disBtn: true,
    }
]);