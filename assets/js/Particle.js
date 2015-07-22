function Particle(){
	this.position = [0,0,0];
	this.rotation = [0,0,0];
	this.spherical_position = [0,0,0];
	this.model = "";
	this.type = "";
};

Particle.prototype.draw = function(){
	mvPushMatrix(mvMatrix);
	mvRotate(this.spherical_position[2], [1,0,0]);	
	mvRotate(this.spherical_position[1], [0,1,0]);
	mvTranslate([0,0,this.spherical_position[0]]);
	mvTranslate(this.position);
	mvRotate(this.rotation[1], [0,1,0]);
	mvRotate(this.rotation[2], [0,0,1]);
	mvRotate(this.rotation[0], [1,0,0]);
	this.model.draw();
	mvPopMatrix();
};