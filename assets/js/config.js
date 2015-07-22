ATOM = {};

ATOM.constants = {};
ATOM.constants.to_radians = Math.PI/180;

ATOM.user = {};
ATOM.user.position = {};
ATOM.user.position.x = 0;
ATOM.user.position.y = 0;
ATOM.user.position.z = -20;
ATOM.user.rotation = {};
ATOM.user.rotation.y = 0;

ATOM.models = {};

ATOM.models.electrons = {};

function init_models(){
	ATOM.models.protons = new Sphere(0.87, 24, 24);
	ATOM.models.protons.set_texture("./assets/textures/proton.png");
	ATOM.models.protons.set_shader(basic_shader);
	
	ATOM.models.neutrons = new Sphere(0.8, 24, 24);
	ATOM.models.neutrons.set_texture("./assets/textures/neutron.png");
	ATOM.models.neutrons.set_shader(basic_shader);

	ATOM.models.electrons["1s"] = new Sphere(0.1, 24, 24);
	ATOM.models.electrons["1s"].set_texture("./assets/textures/electron_1s.png");
	ATOM.models.electrons["1s"].set_shader(basic_shader);
	
	ATOM.models.electrons["2s"] = new Sphere(0.1, 24, 24);
	ATOM.models.electrons["2s"].set_texture("./assets/textures/electron_2s.png");
	ATOM.models.electrons["2s"].set_shader(basic_shader);
}

function init_project(){
	init_models();
}