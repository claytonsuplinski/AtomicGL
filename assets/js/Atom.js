function Atom(num_electrons, num_protons, num_neutrons){
	this.set_new_atom(num_electrons, num_protons, num_neutrons);
}

Atom.prototype.load_atom = function(){
	this.protons = [];
	this.neutrons = [];
	this.electrons = [];

	this.nucleon = new Sphere(this.nucleon_radius, 24, 24);
	if(this.num_neutrons <= 0){
		this.nucleon.set_texture("./assets/textures/proton.png");
	}
	else if(this.num_protons <= 0){
		this.nucleon.set_texture("./assets/textures/neutron.png");
	}
	else{
		this.nucleon.set_texture("./assets/textures/nucleon.png");
	}
	this.nucleon.set_shader(basic_shader);
	
	for(var i=0; i<this.num_protons; i++){
		var proton = new Particle();
		proton.model = ATOM.models.protons;
		proton.spherical_position = [this.nucleon_radius-0.4, 360*Math.random(), 180*Math.random()];
		this.protons.push(proton);  
	}
	
	for(var i=0; i<this.num_neutrons; i++){
		var neutron = new Particle();
		neutron.model = ATOM.models.neutrons;
		neutron.spherical_position = [this.nucleon_radius-0.4, 360*Math.random(), 180*Math.random()];
		this.neutrons.push(neutron);  
	}
	
	var tmp_num_electrons = this.num_electrons;
	for(var i=0; i<Math.min(tmp_num_electrons, 3); i++){
		var tmp = new Particle();
		tmp.type = "1s";
		tmp.model = ATOM.models.electrons["1s"];
		this.electrons.push(tmp);
		tmp_num_electrons--;
	}
	
	for(var i=0; i<Math.min(tmp_num_electrons, 3); i++){
		var tmp = new Particle();
		tmp.type = "2s";
		tmp.model = ATOM.models.electrons["2s"];
		this.electrons.push(tmp);
		tmp_num_electrons--;
	}
	
};

Atom.prototype.set_new_atom = function(num_e, num_p, num_n){
	num_e = Math.abs(parseInt(num_e));
	num_p = Math.abs(parseInt(num_p));
	num_n = Math.abs(parseInt(num_n));

	this.num_electrons = (isNaN(num_e) ? 0 : num_e);
	
	if(!isNaN(num_p)){this.num_protons = Math.abs(parseInt(num_p));}
	else{this.num_protons=0;}
	
	if(!isNaN(num_n)){this.num_neutrons = Math.abs(parseInt(num_n));}
	else{this.num_neutrons=0;}
	
	this.nucleon_radius = 1.2*Math.pow(this.num_protons+this.num_neutrons, 1/3);
	
	this.load_atom();
};

Atom.prototype.draw = function(){
	for(var i=0; i<this.electrons.length; i++){
		if(this.electrons[i].type == "1s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 2,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "2s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 4,360*Math.random(),180*Math.random()];
		}
		this.electrons[i].draw();
	}
	
	mvPushMatrix(mvMatrix);
	mvRotate(360*Math.random(), [1,0,0]);	
	mvRotate(180*Math.random(), [0,1,0]);
	
	this.protons.forEach(function(proton){
		proton.draw();
	});
	
	this.neutrons.forEach(function(neutron){
		neutron.draw();
	});
	
	this.nucleon.draw();
	mvPopMatrix();
};