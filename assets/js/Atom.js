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
	var tmp_atomic_orbitals = "1s";
	curr_atomic_orbital_count = 0;
	for(var i=0; i<Math.min(tmp_num_electrons, 2); i++){
		var tmp = new Particle();
		tmp.type = "1s";
		tmp.model = ATOM.models.electrons["s"];
		this.electrons.push(tmp);
		curr_atomic_orbital_count++;
	}
	tmp_num_electrons -= 2;
	
	tmp_atomic_orbitals += "<sup>"+curr_atomic_orbital_count+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;2s" : "");
	curr_atomic_orbital_count = 0;
	
	if(tmp_num_electrons > 0){
		for(var i=0; i<Math.min(tmp_num_electrons, 2); i++){
			var tmp = new Particle();
			tmp.type = "2s";
			tmp.model = ATOM.models.electrons["s"];
			this.electrons.push(tmp);
			curr_atomic_orbital_count++;
		}
		tmp_num_electrons -= 2;
		
		tmp_atomic_orbitals += "<sup>"+curr_atomic_orbital_count+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;2p" : "");
		curr_atomic_orbital_count = 0;
	}
	
	if(tmp_num_electrons > 0){
		for(var i=0; i<Math.min(tmp_num_electrons, 6); i++){
			var tmp = new Particle();
			tmp.type = "2p";
			tmp.model = ATOM.models.electrons["p"];
			var tmp_offset = 15;
			switch(i){
				case 0:
					tmp.position = [this.nucleon_radius + tmp_offset, 0, 0];
					break;
				case 1:
					tmp.position = [-1 * (this.nucleon_radius + tmp_offset), 0, 0];
					break;
				case 2:
					tmp.position = [0, this.nucleon_radius + tmp_offset, 0];
					break;
				case 3:
					tmp.position = [0, -1 * (this.nucleon_radius + tmp_offset), 0];
					break;
				case 4:
					tmp.position = [0, 0, this.nucleon_radius + tmp_offset];
					break;
				case 5:
					tmp.position = [0, 0, -1 * (this.nucleon_radius + tmp_offset)];
					break;
				default:
					tmp.position = [this.nucleon_radius + tmp_offset, 0, 0];
					break;
			}
			this.electrons.push(tmp);
			curr_atomic_orbital_count++;
		}
		
		tmp_num_electrons -= 6;
	
		tmp_atomic_orbitals += "<sup>"+curr_atomic_orbital_count+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;3s" : "");
		curr_atomic_orbital_count = 0;
	}
	
	if(tmp_num_electrons > 0){
		for(var i=0; i<Math.min(tmp_num_electrons, 2); i++){
			var tmp = new Particle();
			tmp.type = "3s";
			tmp.model = ATOM.models.electrons["s"];
			this.electrons.push(tmp);
			curr_atomic_orbital_count++;
		}
		tmp_num_electrons -= 2;
		
		tmp_atomic_orbitals += "<sup>"+curr_atomic_orbital_count+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;3p" : "");
		curr_atomic_orbital_count = 0;
	}
	
	if(tmp_num_electrons > 0){
		for(var i=0; i<Math.min(tmp_num_electrons, 6); i++){
			var tmp = new Particle();
			tmp.type = "3p";
			tmp.model = ATOM.models.electrons["p"];
			var tmp_offset = 25;
			switch(i){
				case 0:
					tmp.position = [this.nucleon_radius + tmp_offset, 0, 0];
					break;
				case 1:
					tmp.position = [-1 * (this.nucleon_radius + tmp_offset), 0, 0];
					break;
				case 2:
					tmp.position = [0, this.nucleon_radius + tmp_offset, 0];
					break;
				case 3:
					tmp.position = [0, -1 * (this.nucleon_radius + tmp_offset), 0];
					break;
				case 4:
					tmp.position = [0, 0, this.nucleon_radius + tmp_offset];
					break;
				case 5:
					tmp.position = [0, 0, -1 * (this.nucleon_radius + tmp_offset)];
					break;
				default:
					tmp.position = [this.nucleon_radius + tmp_offset, 0, 0];
					break;
			}
			this.electrons.push(tmp);
			curr_atomic_orbital_count++;
		}
		
		tmp_num_electrons -= 6;
	
		tmp_atomic_orbitals += "<sup>"+curr_atomic_orbital_count+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;3s" : "");
		curr_atomic_orbital_count = 0;
	}
	
	$("#atomic-orbitals").html(tmp_atomic_orbitals);
	$("#element-abbr").html((this.num_protons > 0 ? ATOM.data.elements[this.num_protons-1].symbol : ""));
	$("#atomic-number").html(this.num_protons);
	$("#atomic-mass").html(this.num_protons+this.num_neutrons);
	
	var tmp_group = (this.num_protons > 0 ? parseInt(ATOM.data.elements[this.num_protons-1].group) : 0);
	if(!isNaN(tmp_group)){
		var tmp_group_name = ATOM.data.group_names[tmp_group];
		$("#element-group").html("Group "+tmp_group 
			+ " <span class='cas-group-name'>"+tmp_group_name.CAS+"</span>"
			+ " <span class='group-name'>" + tmp_group_name.trivial + "</span>");
	}
	else{$("#element-group").html(ATOM.data.elements[this.num_protons-1].group);}
	
	var tmp_period = (this.num_protons > 0 ? parseInt(ATOM.data.elements[this.num_protons-1].period): 0);
	$("#element-period").html("Period "+tmp_period);
};

Atom.prototype.set_new_atom = function(num_e, num_p, num_n){
	num_e = Math.abs(parseInt(num_e));
	num_p = Math.abs(parseInt(num_p));
	num_n = Math.abs(parseInt(num_n));

	this.num_electrons = (isNaN(num_e) ? 0 : Math.min(num_e, ATOM.constants.max_electrons));
	this.num_protons = (isNaN(num_p) ? 0 : Math.min(num_p, ATOM.constants.max_protons));
	this.num_neutrons = (isNaN(num_n) ? 0 : Math.min(num_n, ATOM.constants.max_neutrons));
	
	$("#num-electrons").val(this.num_electrons);
	$("#num-protons").val(this.num_protons);
	$("#num-neutrons").val(this.num_neutrons);
	
	this.nucleon_radius = 1.2*Math.pow(this.num_protons+this.num_neutrons, 1/3);
	
	this.load_atom();
};

Atom.prototype.draw = function(){
	for(var i=0; i<this.electrons.length; i++){
		if(this.electrons[i].type == "1s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 5,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "2s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 10,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "2p"){
			this.electrons[i].spherical_position = [5,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "3s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 20,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "3p"){
			this.electrons[i].spherical_position = [5,360*Math.random(),180*Math.random()];
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