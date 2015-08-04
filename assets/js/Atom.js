function Atom(num_electrons, num_protons, num_neutrons){
	this.set_new_atom(num_electrons, num_protons, num_neutrons);
	this.atomic_orbitals = "";
}

Atom.prototype.load_orbital = function(tmp_num_electrons, level, orbital, offset){
	var num_electrons = 0;
	if(tmp_num_electrons > 0){
		switch(orbital){
			case "s":
				num_electrons = Math.min(tmp_num_electrons, 2);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = level+orbital;
					tmp.radius_offset = offset;
					tmp.model = ATOM.models.electrons[orbital];
					this.electrons.push(tmp);
				}
				tmp_num_electrons -= 2;
				break;
			case "p":
				num_electrons = Math.min(tmp_num_electrons, 6);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = level+orbital;
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
				break;
			case "d":
				num_electrons = Math.min(tmp_num_electrons, 10);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = level+orbital;
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
				break;
			case "f":
				num_electrons = Math.min(tmp_num_electrons, 14);
				for(var i=0; i<num_electrons; i++){
					var tmp = new Particle();
					tmp.type = level+orbital;
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
				break;
		}
		this.atomic_orbitals += (tmp_num_electrons > 0 ? "" : "</span>")+level+orbital+"<sup>"+num_electrons+"</sup>&nbsp;";
		return tmp_num_electrons;
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
	this.atomic_orbitals = "<span class='hidden-sm hidden-xs'>";
	
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "1", "s", 5);	
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "2", "s", 10);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "2", "p", 15);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "3", "s", 20);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "3", "p", 25);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "4", "s", 30);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "3", "d", 35);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "4", "p", 40);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "5", "s", 45);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "4", "d", 50);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "5", "p", 55);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "6", "s", 60);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "4", "f", 65);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "5", "d", 70);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "6", "p", 75);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "7", "s", 80);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "5", "f", 85);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "6", "d", 90);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "7", "p", 95);
	tmp_num_electrons = this.load_orbital(tmp_num_electrons, "8", "s", 100);

	tmp_atomic_orbitals = this.atomic_orbitals;
	
	$("#atomic-orbitals").html(this.atomic_orbitals);
	var element_abbr = "";
	if(this.num_protons > 0){
		element_abbr += ATOM.data.elements[this.num_protons-1].symbol;
		if(this.num_protons != this.num_electrons){
			element_abbr += "<sup>";
			var tmp_diff = Math.abs(this.num_protons - this.num_electrons);
			if(tmp_diff > 1){
				element_abbr += tmp_diff;
			}
			if(this.num_protons > this.num_electrons){				
				element_abbr += "<span style='font-size:20px;'>+</span>";
			}
			else{
				element_abbr += "-";
			}
			element_abbr += "</sup>";
		}
		element_abbr += "&nbsp;<span class='group-name'>"+ATOM.data.elements[this.num_protons-1].name+"</span>";
	}
	$("#element-abbr").html(element_abbr);
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
	
	ATOM.user.position.z = -(this.nucleon_radius + 30);
	
	this.load_atom();
};

Atom.prototype.draw = function(){
	var self = this;
	this.electrons.forEach(function(electron){
		if(electron.type[1] == "p" || electron.type[1] == "d" || electron.type[1] == "f"){
			electron.spherical_position = [5,360*Math.random(),180*Math.random()];
		}
		else if(electron.type[1] == "s"){
			electron.spherical_position = [self.nucleon_radius + electron.radius_offset,360*Math.random(),180*Math.random()];
		}
		electron.draw();
	});
	
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