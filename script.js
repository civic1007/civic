// app.js
// Initialize the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a simple cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
let frame = 0;
const totalFrames = 300; // Number of frames to render

function render() {
    if (frame < totalFrames) {
        // Rotate the cube for some basic animation
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);

        frame++;
    } else {
        document.getElementById('message').innerText = 'Rendering Completed';
        clearInterval(renderInterval);
    }
}

// Slow down the rendering
const renderInterval = setInterval(render, 100); // 100ms interval

// Initial message
document.getElementById('message').innerText = 'Rendering...';

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
