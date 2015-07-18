//
// start
//
// Called when the canvas is created to get the ball rolling.
//
function start() {
  canvas = document.getElementById("glcanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  initWebGL(canvas);      // Initialize the GL context
  
  // Only continue if WebGL is available and working
  
  if (gl) {
    gl.clearColor(0.0, 0.02, 0.04, 1.0);  // Clear to black, fully opaque
    gl.clearDepth(1.0);                 // Clear everything
    gl.enable(gl.DEPTH_TEST);           // Enable depth testing
    gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
    	
	basic_shader = new Shader("shader-vs", "shader-fs");
	
	test_sphere = new Sphere(0.1, 24, 24);
	test_sphere.set_texture("./assets/textures/electron.png");
	test_sphere.set_shader(basic_shader);
	
	electrons = [];
	for(var i=0; i<10; i++){
		var tmp_e = new Particle();
		tmp_e.model = test_sphere;
		electrons.push(tmp_e);
	}
	
	test_sphere_2 = new Sphere(0.87, 24, 24);
	test_sphere_2.set_texture("./assets/textures/proton.png");
	test_sphere_2.set_shader(basic_shader);
	
	proton = new Particle();
	proton.model = test_sphere_2;
	
	test_sphere_3 = new Sphere(0.8, 24, 24);
	test_sphere_3.set_texture("./assets/textures/neutron.png");
	test_sphere_3.set_shader(basic_shader);
	
	neutron = new Particle();
	neutron.model = test_sphere_3;
    
    setInterval(drawScene, 15);
  }
}

//*
// initWebGL
//
// Initialize WebGL, returning the GL context or null if
// WebGL isn't available or could not be initialized.
//
function initWebGL() {
  gl = null;
  
  try {
    gl = canvas.getContext("experimental-webgl");
  }
  catch(e) {
  }
  
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
  }
}

//
// drawScene
//
// Draw the scene.
//
function drawScene() {

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
  perspectiveMatrix = makePerspective(45, canvas.width/canvas.height, 0.1, 100.0);
  
  loadIdentity();
  
  mvTranslate([0,0,-20]);
  
  for(var i=0; i<electrons.length; i++){
	electrons[i].spherical_position = [3,100*cubeRotation+(1234/electrons.length)*i,-(360/electrons.length)*i];
	electrons[i].draw();
  }

  proton.position = [0,-0.87,0];
  proton.rotation = [0, 100*cubeRotation, 0];
  proton.draw();  
  
  neutron.position = [0,0.8,0];
  neutron.rotation = [0, -100*cubeRotation, 0];
  neutron.draw();  
  
  // Update the rotation for the next draw, if it's time to do so.
  
  var currentTime = (new Date).getTime();
  if (lastCubeUpdateTime) {
    var delta = currentTime - lastCubeUpdateTime;
    
    cubeRotation += (30 * delta) / 10000.0;
  }
  
  lastCubeUpdateTime = currentTime;
}