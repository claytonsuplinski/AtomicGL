document.addEventListener('keydown', function(event) {
    if(event.keyCode == 87) { // W
		// Go forwards
		var tmp_angle = -ATOM.user.rotation.y*ATOM.constants.to_radians;
		ATOM.user.position.x += Math.sin(tmp_angle);
		ATOM.user.position.z += Math.cos(tmp_angle);
    }
	else if(event.keyCode == 83) { // S
        // Go backwards
		var tmp_angle = -ATOM.user.rotation.y*ATOM.constants.to_radians;
		ATOM.user.position.x -= Math.sin(tmp_angle);
		ATOM.user.position.z -= Math.cos(tmp_angle);
    }
	else if(event.keyCode == 68) { // D
        // Rotate right
		ATOM.user.rotation.y++;
		while(ATOM.user.rotation.y < 0){
			ATOM.user.rotation.y += 360;
		}
		ATOM.user.rotation.y %= 360;
    }
	else if(event.keyCode == 65) { // A
        // Rotate left
		ATOM.user.rotation.y--;
		while(ATOM.user.rotation.y < 0){
			ATOM.user.rotation.y += 360;
		}
		ATOM.user.rotation.y %= 360;
    }
	else if(event.keyCode == 81) { // Q
        // Go up
		ATOM.user.position.y++;
    }
	else if(event.keyCode == 90) { // Z
        // Go down
		ATOM.user.position.y--;
    }
});