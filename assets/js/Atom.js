function Atom(num_electrons, num_protons, num_neutrons){
	this.num_protons = num_protons;
	this.num_neutrons = num_neutrons;
	this.num_electrons = num_electrons;
	
	this.load_atom();
}

Atom.prototype.load_atom = function(){
	this.protons = [];
	this.neutrons = [];
	this.electrons = [];
	
	var tmp_num_electrons = this.num_electrons;
	for(var i=0; i<Math.min(tmp_num_electrons, 30); i++){
		var tmp = new Particle();
		tmp.type = "1s";
		tmp.model = ATOM.models.electrons["1s"];
		this.electrons.push(tmp);
		tmp_num_electrons--;
	}
	
	for(var i=0; i<Math.min(tmp_num_electrons, 060); i++){
		var tmp = new Particle();
		tmp.type = "2s";
		tmp.model = ATOM.models.electrons["2s"];
		this.electrons.push(tmp);
		tmp_num_electrons--;
	}

	var proton = new Particle();
	proton.model = ATOM.models.protons;
	proton.position = [0,-0.87,0];
	proton.rotation = [0, 100, 0];
	this.protons.push(proton);  
	
	var neutron = new Particle();
	neutron.model = ATOM.models.neutrons;
	neutron.position = [0,0.8,0];
	neutron.rotation = [0, 100, 0];
	this.neutrons.push(neutron);  	
};

Atom.prototype.draw = function(){
	for(var i=0; i<this.electrons.length; i++){
		if(this.electrons[i].type == "1s"){
			this.electrons[i].spherical_position = [3,360*Math.random(),180*Math.random()];
		}
		else{
			this.electrons[i].spherical_position = [6,360*Math.random(),180*Math.random()];
		}
		this.electrons[i].draw();
	}
	
	for(var i=0; i<this.protons.length; i++){
		this.protons[i].draw();
	}
	
	for(var i=0; i<this.neutrons.length; i++){
		this.neutrons[i].draw();
	}
};