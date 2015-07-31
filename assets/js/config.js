ATOM = {};

ATOM.constants = {};
ATOM.constants.to_radians = Math.PI/180;
ATOM.constants.max_electrons = 120;
ATOM.constants.max_protons = 118;
ATOM.constants.max_neutrons = 118;

ATOM.data = {};
ATOM.data.elements = [];
ATOM.data.group_names = [
	{"trivial": "", "CAS": ""},
	{"trivial": "Alkali Metals", "CAS": "IA"},
	{"trivial": "Alkaline Earth Metals", "CAS": "IIA"},
	{"trivial": "Scandium Group", "CAS": "IIIB"},
	{"trivial": "Titanium Group", "CAS": "IVB"},
	{"trivial": "Vanadium Group", "CAS": "VB"},
	{"trivial": "Chromium Group", "CAS": "VIB"},
	{"trivial": "Manganese Group", "CAS": "VIIB"},
	{"trivial": "Iron Group", "CAS": "VIIIB"},
	{"trivial": "Cobalt Group", "CAS": "VIIIB"},
	{"trivial": "Nickel Group", "CAS": "VIIIB"},
	{"trivial": "Coinage Metals", "CAS": "IB"},
	{"trivial": "Volatile Metals", "CAS": "IIB"},
	{"trivial": "Icosagens", "CAS": "IIIA"},
	{"trivial": "Crystallogens", "CAS": "IVA"},
	{"trivial": "Pnictogens", "CAS": "VA"},
	{"trivial": "Chalcogens", "CAS": "VIA"},
	{"trivial": "Halogens", "CAS": "VIIA"},
	{"trivial": "Noble Gases", "CAS": "VIIIA"}
];

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

	ATOM.models.electrons["s"] = new Sphere(0.2, 8, 8);
	ATOM.models.electrons["s"].set_texture("./assets/textures/electron_s.png");
	ATOM.models.electrons["s"].set_shader(basic_shader);
	
	ATOM.models.electrons["p"] = new Sphere(0.2, 8, 8);
	ATOM.models.electrons["p"].set_texture("./assets/textures/electron_p.png");
	ATOM.models.electrons["p"].set_shader(basic_shader);	
	
	ATOM.models.electrons["d"] = new Sphere(0.2, 8, 8);
	ATOM.models.electrons["d"].set_texture("./assets/textures/electron_d.png");
	ATOM.models.electrons["d"].set_shader(basic_shader);	
	
	ATOM.models.electrons["f"] = new Sphere(0.2, 8, 8);
	ATOM.models.electrons["f"].set_texture("./assets/textures/electron_f.png");
	ATOM.models.electrons["f"].set_shader(basic_shader);	
}

function load_elements_data(){
	$.ajaxSetup({async:false});
	var tmp_modal_html = "";
	$.getJSON( "./assets/json/elements.json", function( data ) {
		data.elements.forEach(function (element){
			ATOM.data.elements.push(element);
			tmp_modal_html += "<div class='col-xs-12 select-individual-element' ";
				tmp_modal_html += "onclick='atom.set_new_atom("+element["atomic-number"]+", "
						+element["atomic-number"]+", "
						+(parseInt(element["molar-mass"] - element["atomic-number"]))+");' data-dismiss='modal'>";
				tmp_modal_html += "<table><tr>";
					tmp_modal_html += "<td style='width:10%;'>";
						tmp_modal_html += element["atomic-number"];
					tmp_modal_html += "</td>";
					tmp_modal_html += "<td style='width:10%;'>";
						tmp_modal_html += element.symbol;
					tmp_modal_html += "</td>";
					tmp_modal_html += "<td style='width:40%;text-align:center;'>";
						tmp_modal_html += element.name;
					tmp_modal_html += "</td>";
					tmp_modal_html += "<td style='width:40%;text-align:center;'>";
						tmp_modal_html += element["molar-mass"];
					tmp_modal_html += "</td>";
				tmp_modal_html += "</tr></table>";
			tmp_modal_html += "</div>";
		});
	});
	$("#list-of-elements").html(tmp_modal_html);
	$.ajaxSetup({async:true});
}

function init_project(){
	init_models();
	load_elements_data();
}