import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, MeshBasicMaterial, SphereGeometry, MeshStandardMaterial, PointLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Scène
const scene = new Scene()
// Caméra
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 150
camera.position.x = 1
camera.position.y = 20
camera.lookAt(0, 0, 0)
// Rendu
const renderer = new WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)
// Control
const controls = new OrbitControls(camera, renderer.domElement)
// Resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render(scene, camera);
})
// Lumieère
const light = new PointLight( "white", 2, 1000 );
scene.add( light );

const sunGeometry = new SphereGeometry(10,64,64)
const sunMaterial = new MeshBasicMaterial({color: 'yellow'})
const sun = new Mesh(sunGeometry, sunMaterial)
scene.add(sun)

const mecureGeometry = new SphereGeometry(.5,64,64)
mecureGeometry.translate(60,0,0)
const mercuryMaterial = new MeshStandardMaterial({color: 'orange'})
const mercury = new Mesh(mecureGeometry, mercuryMaterial)
scene.add(mercury)

const venusGeometry = new SphereGeometry(1.2,64,64)
venusGeometry.translate(110,0,0)
const venusMaterial = new MeshStandardMaterial({color: 'green'})
const venus = new Mesh(venusGeometry, venusMaterial)
scene.add(venus)

const earthGeometry = new SphereGeometry(1.3,64,64)
earthGeometry.translate(150,0,0)
const earthMaterial = new MeshStandardMaterial({color: 'blue'})
const earth = new Mesh(earthGeometry, earthMaterial)
scene.add(earth)

const marsGeometry = new SphereGeometry(.7,64,64)
marsGeometry.translate(230,0,0)
const marsMaterial = new MeshStandardMaterial({color: 'red'})
const mars = new Mesh(marsGeometry, marsMaterial)
scene.add(mars)

function animate() {
    renderer.render(scene, camera)
    mercury.rotateY(.04) 
    venus.rotateY(.03)
    earth.rotateY(.02)
    mars.rotateY(.01)
    controls.update()
    requestAnimationFrame(animate) 
};

function movePlanete() {

}

animate();