document.addEventListener('keydown', function(event) {
	if(ATOM.keys_pressed.indexOf(event.keyCode) == -1){
		ATOM.keys_pressed.push(event.keyCode);
	}
});

document.addEventListener('keyup', function(event) {
	ATOM.keys_pressed.splice(ATOM.keys_pressed.indexOf(event.keyCode), 1);
});

setInterval(function(){
	if(ATOM.keys_pressed.indexOf(87) != -1) { // W
		// Go forwards
		var tmp_angle = -ATOM.user.rotation.y*ATOM.constants.to_radians;
		ATOM.user.position.x += Math.sin(tmp_angle);
		ATOM.user.position.z += Math.cos(tmp_angle);
    }
	if(ATOM.keys_pressed.indexOf(83) != -1) { // S
        // Go backwards
		var tmp_angle = -ATOM.user.rotation.y*ATOM.constants.to_radians;
		ATOM.user.position.x -= Math.sin(tmp_angle);
		ATOM.user.position.z -= Math.cos(tmp_angle);
    }
	if(ATOM.keys_pressed.indexOf(68) != -1) { // D
        // Rotate right
		ATOM.user.rotation.y++;
		while(ATOM.user.rotation.y < 0){
			ATOM.user.rotation.y += 360;
		}
		ATOM.user.rotation.y %= 360;
    }
	if(ATOM.keys_pressed.indexOf(65) != -1) { // A
        // Rotate left
		ATOM.user.rotation.y--;
		while(ATOM.user.rotation.y < 0){
			ATOM.user.rotation.y += 360;
		}
		ATOM.user.rotation.y %= 360;
    }
	if(ATOM.keys_pressed.indexOf(81) != -1) { // Q
        // Go up
		ATOM.user.position.y++;
    }
	if(ATOM.keys_pressed.indexOf(90) != -1) { // Z
        // Go down
		ATOM.user.position.y--;
    }
	if(ATOM.keys_pressed.indexOf(38) != -1) { // Up Arrow
        // Go down
		ATOM.user.rotation.x--;
    }
	if(ATOM.keys_pressed.indexOf(40) != -1) { // Down Arrow
        // Go down
		ATOM.user.rotation.x++;
    }
}, 60);