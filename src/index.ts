import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, MeshBasicMaterial, SphereGeometry } from 'three'
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

const sunGeometry = new SphereGeometry(10,64,64)
const sunMaterial = new MeshBasicMaterial({color: 'yellow'})
const sun = new Mesh(sunGeometry, sunMaterial)
scene.add(sun)

const mecureGeometry = new SphereGeometry(1,64,64)
mecureGeometry.translate(-50,0,0)
const mercuryMaterial = new MeshBasicMaterial({color: 'orange'})
const mercury = new Mesh(mecureGeometry, mercuryMaterial)
sun.add(mercury)

const venusGeometry = new SphereGeometry(2,64,64)
venusGeometry.translate(-75,0,0)
const venusMaterial = new MeshBasicMaterial({color: 'green'})
const venus = new Mesh(venusGeometry, venusMaterial)
sun.add(venus)

const earthGeometry = new SphereGeometry(4,64,64)
earthGeometry.translate(100,0,0)
const earthMaterial = new MeshBasicMaterial({color: 'blue'})
const earth = new Mesh(earthGeometry, earthMaterial)
sun.add(earth)

const marsGeometry = new SphereGeometry(3,64,64)
marsGeometry.translate(125,0,0)
const marsMaterial = new MeshBasicMaterial({color: 'red'})
const mars = new Mesh(marsGeometry, marsMaterial)
sun.add(mars)

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