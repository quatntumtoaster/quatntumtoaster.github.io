if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
var camera, scene, renderer;
var geometry, material, mesh;

function setup() {
	var W = window.innerWidth, H = window.innerHeight;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( W, H );
	document.body.appendChild( renderer.domElement );

	camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
	camera.position.z = 500;

	scene = new THREE.Scene();

	// paste your code from the geometryGUI here
	geometry = new THREE.TorusGeometry(200, 123.94, 13, 21, 25.13);
	material = new THREE.MeshBasicMaterial({shading: THREE.FlatShading,
		color: 0xe6e6e6, wireframe: true,
		wireframeLinewidth: 1,
		transparent: true,
		opacity: 0.25});
	mesh = new THREE.Mesh(geometry, material);
	mesh.scale.x = mesh.scale.y = mesh.scale.z = 2;
	mesh.rotation.x = 2.75;
	mesh.position.y = 2;
	scene.add(mesh);

	bg = document.body.style;
	bg.background = '#00b7ff';
}

function draw() {
	requestAnimationFrame( draw );

	// experiment with code from the snippets menu here
	mesh.rotation.x = Date.now() * 0.00002;
	mesh.rotation.y = Date.now() * 0.00002;
	mesh.rotation.z = Date.now() * 0.00002;

	renderer.render( scene, camera );
}

setup();
draw();
