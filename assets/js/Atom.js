function Atom(num_electrons, num_protons, num_neutrons){
	this.set_new_atom(num_electrons, num_protons, num_neutrons);
	this.atomic_orbitals = "";
}

Atom.prototype.load_orbital = function(tmp_num_electrons, orbital, type, next, offset){
	if(tmp_num_electrons > 0){
		switch(orbital){
			case "s":
				var num_electrons = Math.min(tmp_num_electrons, 2);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = type;
					tmp.model = ATOM.models.electrons[orbital];
					this.electrons.push(tmp);
				}
				tmp_num_electrons -= 2;
				
				this.atomic_orbitals += "<sup>"+num_electrons+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;"+next : "");
				return tmp_num_electrons;
			case "p":
				var num_electrons = Math.min(tmp_num_electrons, 6);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = type;
					tmp.model = ATOM.models.electrons[orbital];
					var tmp_offset = offset;
					var tmp_rad = this.nucleon_radius + tmp_offset;
					switch(i){
						case 0:
							tmp.position = [tmp_rad, 0, 0];
							break;
						case 1:
							tmp.position = [-tmp_rad, 0, 0];
							break;
						case 2:
							tmp.position = [0, tmp_rad, 0];
							break;
						case 3:
							tmp.position = [0, -tmp_rad, 0];
							break;
						case 4:
							tmp.position = [0, 0, tmp_rad];
							break;
						case 5:
							tmp.position = [0, 0, -tmp_rad];
							break;
						default:
							tmp.position = [tmp_rad, 0, 0];
							break;
					}
					this.electrons.push(tmp);
				}
				
				tmp_num_electrons -= 6;
			
				this.atomic_orbitals += "<sup>"+num_electrons+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;"+next : "");
				return tmp_num_electrons;
			case "d":
				var num_electrons = Math.min(tmp_num_electrons, 10);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = type;
					tmp.model = ATOM.models.electrons[orbital];
					var tmp_offset = offset;
					var tmp_rad = this.nucleon_radius + tmp_offset;
					var mid_angle = 60 * Math.PI / 180;
					switch(i){
						case 0:
							tmp.position = [tmp_rad*Math.cos(mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(mid_angle), 
											tmp_rad*Math.sin(mid_angle)*Math.sin(mid_angle)];
							break;
						case 1:
							tmp.position = [tmp_rad*Math.cos(2*mid_angle)*Math.sin(2*mid_angle), 
											tmp_rad*Math.cos(2*mid_angle), 
											tmp_rad*Math.sin(2*mid_angle)*Math.sin(2*mid_angle)];
							break;
						case 2:
							tmp.position = [tmp_rad*Math.cos(mid_angle)*Math.sin(2*mid_angle), 
											-tmp_rad*Math.cos(mid_angle), 
											tmp_rad*Math.sin(mid_angle)*Math.sin(2*mid_angle)];
							break;
						case 3:
							tmp.position = [tmp_rad*Math.cos(2*mid_angle)*Math.sin(mid_angle), 
											-tmp_rad*Math.cos(2*mid_angle), 
											tmp_rad*Math.sin(2*mid_angle)*Math.sin(mid_angle)];
							break;
						case 4:
							tmp.position = [-tmp_rad*Math.cos(mid_angle)*Math.sin(2*mid_angle), 
											-tmp_rad*Math.cos(mid_angle), 
											-tmp_rad*Math.sin(mid_angle)*Math.sin(2*mid_angle)];
							break;
						case 5:
							tmp.position = [-tmp_rad*Math.cos(2*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(2*mid_angle), 
											-tmp_rad*Math.sin(2*mid_angle)*Math.sin(mid_angle)];
							break;
						case 6:
							tmp.position = [-tmp_rad*Math.cos(mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(mid_angle), 
											-tmp_rad*Math.sin(mid_angle)*Math.sin(mid_angle)];
							break;
						case 7:
							tmp.position = [-tmp_rad*Math.cos(2*mid_angle)*Math.sin(2*mid_angle), 
											-tmp_rad*Math.cos(2*mid_angle), 
											-tmp_rad*Math.sin(2*mid_angle)*Math.sin(2*mid_angle)];
							break;					
						case 8:
							tmp.position = [0, tmp_rad, 0];
							break;
						case 9:
							tmp.position = [0, -tmp_rad, 0];
							break;
						default:
							tmp.position = [0, tmp_rad, 0];
							break;
					}
					this.electrons.push(tmp);
				}
				
				tmp_num_electrons -= 10;
			
				this.atomic_orbitals += "<sup>"+num_electrons+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;"+next : "");
				return tmp_num_electrons;
			case "f":
				var num_electrons = Math.min(tmp_num_electrons, 14);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = type;
					tmp.model = ATOM.models.electrons[orbital];
					var tmp_offset = offset;
					var tmp_rad = this.nucleon_radius + tmp_offset;
					var mid_angle = 45 * Math.PI / 180;
					switch(i){
						case 0:
							tmp.position = [tmp_rad*Math.cos(mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(mid_angle), 
											tmp_rad*Math.sin(mid_angle)*Math.sin(mid_angle)];
							break;
						case 1:
							tmp.position = [tmp_rad*Math.cos(3*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(3*mid_angle), 
											tmp_rad*Math.sin(3*mid_angle)*Math.sin(mid_angle)];
							break;
						case 2:
							tmp.position = [-tmp_rad*Math.cos(mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(mid_angle), 
											-tmp_rad*Math.sin(mid_angle)*Math.sin(mid_angle)];
							break;
						case 3:
							tmp.position = [-tmp_rad*Math.cos(3*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(3*mid_angle), 
											-tmp_rad*Math.sin(3*mid_angle)*Math.sin(mid_angle)];
							break;
						case 4:
							tmp.position = [-tmp_rad*Math.cos(mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(mid_angle), 
											tmp_rad*Math.sin(mid_angle)*Math.sin(mid_angle)];
							break;
						case 5:
							tmp.position = [tmp_rad*Math.cos(3*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(3*mid_angle), 
											-tmp_rad*Math.sin(3*mid_angle)*Math.sin(mid_angle)];
							break;
						case 6:
							tmp.position = [tmp_rad*Math.cos(mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(mid_angle), 
											-tmp_rad*Math.sin(mid_angle)*Math.sin(mid_angle)];
							break;
						case 7:
							tmp.position = [-tmp_rad*Math.cos(3*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(3*mid_angle), 
											tmp_rad*Math.sin(3*mid_angle)*Math.sin(mid_angle)];
							break;
						case 8:
							tmp.position = [tmp_rad*Math.cos(2*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(2*mid_angle), 
											tmp_rad*Math.sin(2*mid_angle)*Math.sin(mid_angle)];
							break;
						case 9:
							tmp.position = [-tmp_rad*Math.cos(2*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(2*mid_angle), 
											-tmp_rad*Math.sin(2*mid_angle)*Math.sin(mid_angle)];
							break;
						case 10:
							tmp.position = [tmp_rad*Math.sin(2*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(2*mid_angle), 
											tmp_rad*Math.cos(2*mid_angle)*Math.sin(mid_angle)];
							break;
						case 11:
							tmp.position = [-tmp_rad*Math.sin(2*mid_angle)*Math.sin(mid_angle), 
											tmp_rad*Math.cos(2*mid_angle), 
											-tmp_rad*Math.cos(2*mid_angle)*Math.sin(mid_angle)];
							break;
						case 12:
							tmp.position = [0, tmp_rad, 0];
							break;
						case 13:
							tmp.position = [0, -tmp_rad, 0];
							break;
						default:
							tmp.position = [0, tmp_rad, 0];
							break;
					}
					this.electrons.push(tmp);
				}
				
				tmp_num_electrons -= 14;
			
				this.atomic_orbitals += "<sup>"+num_electrons+"</sup>" + (tmp_num_electrons > 0 ? "&nbsp;"+next : "");
				return tmp_num_electrons;
		}
	}
};

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
	this.atomic_orbitals = "1s";
	
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "1s", "2s", 0);	
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "2s", "2p", 0);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "p", "2p", "3s", 15);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "3s", "3p", 0);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "p", "3p", "4s", 25);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "4s", "3d", 0);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "d", "3d", "4p", 35);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "p", "4p", "5s", 40);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "5s", "4d", 0);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "d", "4d", "5p", 50);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "p", "5p", "6s", 55);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "6s", "4f", 0);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "f", "4f", "5d", 65);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "d", "5d", "6p", 70);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "p", "6p", "7s", 75);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "7s", "5f", 0);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "f", "5f", "6d", 85);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "d", "6d", "7p", 90);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "p", "7p", "8s", 95);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "s", "8s", "", 0);

	tmp_atomic_orbitals = this.atomic_orbitals;
	
	$("#atomic-orbitals").html(this.atomic_orbitals);
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
		if(this.electrons[i].type[1] == "p" || this.electrons[i].type[1] == "d" || this.electrons[i].type[1] == "f"){
			this.electrons[i].spherical_position = [5,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "1s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 5,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "2s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 10,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "3s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 20,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "4s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 30,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "5s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 45,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "6s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 60,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "7s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 80,360*Math.random(),180*Math.random()];
		}
		else if(this.electrons[i].type == "8s"){
			this.electrons[i].spherical_position = [this.nucleon_radius + 100,360*Math.random(),180*Math.random()];
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