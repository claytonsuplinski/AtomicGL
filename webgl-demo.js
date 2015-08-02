var canvas;
var gl;

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

function resize_canvas(){
	canvas = document.getElementById("glcanvas");
	canvas.style.width = window.innerWidth;
	canvas.style.height = window.innerHeight;
}

window.addEventListener('resize', resize_canvas);

function start() {

	init_mouse_controls();	
	resize_canvas();

	initWebGL(canvas);

	if (gl) {
		gl.clearColor(0.0, 0.02, 0.04, 1.0);  // Clear to black, fully opaque
		gl.clearDepth(1.0);                 // Clear everything
		gl.enable(gl.DEPTH_TEST);           // Enable depth testing
		gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
			
		basic_shader = new Shader("shader-vs", "shader-fs");

		init_project();

		var random_init = 117 * Math.random() + 1;
		atom = new Atom(random_init, random_init, random_init);

		setInterval(drawScene, 15);
	}
}

function drawScene() {

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	perspectiveMatrix = makePerspective(45, window.innerWidth/window.innerHeight, 0.1, 5000.0);

	loadIdentity();

	if(ATOM.user.free_mode){
		mvRotate(ATOM.user.rotation.x, [1,0,0]);
		mvRotate(ATOM.user.rotation.y, [0,1,0]);
		mvTranslate([ATOM.user.position.x,0-ATOM.user.position.y,ATOM.user.position.z]);
	}
	else{
		mvTranslate([ATOM.user.position.x,0-ATOM.user.position.y,ATOM.user.position.z]);
		mvRotate(ATOM.user.rotation.x, [1,0,0]);
		mvRotate(ATOM.user.rotation.y, [0,1,0]);
	}

	atom.draw();
  
}