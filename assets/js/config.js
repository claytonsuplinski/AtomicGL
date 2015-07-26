ATOM = {};

ATOM.constants = {};
ATOM.constants.to_radians = Math.PI/180;
ATOM.constants.max_electrons = 10;
ATOM.constants.max_protons = 118;
ATOM.constants.max_neutrons = 200;

ATOM.data = {};
ATOM.data.elements = [];

ATOM.keys_pressed = [];

ATOM.user = {};
ATOM.user.position = {};
ATOM.user.position.x = 0;
ATOM.user.position.y = 0;
ATOM.user.position.z = -20;
ATOM.user.rotation = {};
ATOM.user.rotation.x = 0;
ATOM.user.rotation.y = 0;

ATOM.models = {};

ATOM.models.electrons = {};

function init_models(){
	ATOM.models.protons = new Sphere(0.8, 24, 24);
	ATOM.models.protons.set_texture("./assets/textures/proton.png");
	ATOM.models.protons.set_shader(basic_shader);
	
	ATOM.models.neutrons = new Sphere(0.8, 24, 24);
	ATOM.models.neutrons.set_texture("./assets/textures/neutron.png");
	ATOM.models.neutrons.set_shader(basic_shader);

	ATOM.models.electrons["1s"] = new Sphere(0.1, 8, 8);
	ATOM.models.electrons["1s"].set_texture("./assets/textures/electron_1s.png");
	ATOM.models.electrons["1s"].set_shader(basic_shader);
	
	ATOM.models.electrons["2s"] = new Sphere(0.1, 8, 8);
	ATOM.models.electrons["2s"].set_texture("./assets/textures/electron_2s.png");
	ATOM.models.electrons["2s"].set_shader(basic_shader);
	
	ATOM.models.electrons["2p"] = new Sphere(0.1, 8, 8);
	ATOM.models.electrons["2p"].set_texture("./assets/textures/electron_2p.png");
	ATOM.models.electrons["2p"].set_shader(basic_shader);	
}

function load_elements_data(){
	$.ajaxSetup({async:false});
	$.getJSON( "./assets/json/elements.json", function( data ) {
		data.elements.forEach(function (element){
			ATOM.data.elements.push(element);
		});
	});
	$.ajaxSetup({async:true});
}

function init_project(){
	init_models();
	load_elements_data();
}