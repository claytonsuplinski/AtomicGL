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
		if(ATOM.user.free_mode){
			var tmp_angle = -ATOM.user.rotation.y*ATOM.constants.to_radians;
			ATOM.user.position.x += Math.sin(tmp_angle);
			ATOM.user.position.z += Math.cos(tmp_angle);
		}
    }
	if(ATOM.keys_pressed.indexOf(83) != -1) { // S
        // Go backwards
		if(ATOM.user.free_mode){
			var tmp_angle = -ATOM.user.rotation.y*ATOM.constants.to_radians;
			ATOM.user.position.x -= Math.sin(tmp_angle);
			ATOM.user.position.z -= Math.cos(tmp_angle);
		}
    }
	if(ATOM.keys_pressed.indexOf(68) != -1) { // D
        // Rotate right
		if(ATOM.user.free_mode){
			ATOM.user.rotation.y++;
			while(ATOM.user.rotation.y < 0){
				ATOM.user.rotation.y += 360;
			}
			ATOM.user.rotation.y %= 360;
		}
    }
	if(ATOM.keys_pressed.indexOf(65) != -1) { // A
        // Rotate left
		if(ATOM.user.free_mode){
			ATOM.user.rotation.y--;
			while(ATOM.user.rotation.y < 0){
				ATOM.user.rotation.y += 360;
			}
			ATOM.user.rotation.y %= 360;
		}
    }
	if(ATOM.keys_pressed.indexOf(81) != -1) { // Q
        // Go up
		if(ATOM.user.free_mode){
			ATOM.user.position.y++;
		}
    }
	if(ATOM.keys_pressed.indexOf(90) != -1) { // Z
        // Go down
		if(ATOM.user.free_mode){
			ATOM.user.position.y--;
		}
    }
	if(ATOM.keys_pressed.indexOf(38) != -1) { // Up Arrow
        // Go down
		if(ATOM.user.free_mode){
			ATOM.user.rotation.x--;
		}
    }
	if(ATOM.keys_pressed.indexOf(40) != -1) { // Down Arrow
        // Go down
		if(ATOM.user.free_mode){
			ATOM.user.rotation.x++;
		}
    }
}, 60);

function init_mouse_controls(){
	$("#glcanvas")
		.mousedown(function (event){
			ATOM.mouse.x = event.pageX;
			ATOM.mouse.y = event.pageY;
			if(event.which == 1){ // Left mouse
				ATOM.mouse.left_down = true;
			}
			if(event.which == 3){ // Right mouse
				ATOM.mouse.right_down = true;
			}
		})	
		.mousemove(function(event) {
			if(ATOM.mouse.left_down){
				ATOM.user.rotation.y += (event.pageX - ATOM.mouse.x);
				ATOM.user.rotation.x += (event.pageY - ATOM.mouse.y)/2;
				while(ATOM.user.rotation.y < 0){
					ATOM.user.rotation.y += 360;
				}
				while(ATOM.user.rotation.y > 360){
					ATOM.user.rotation.y -= 360;
				}
				if(ATOM.user.rotation.x > 90){
					ATOM.user.rotation.x = 90;
				}
				if(ATOM.user.rotation.x < -90){
					ATOM.user.rotation.x = -90;
				}
			}
			if(ATOM.mouse.right_down){
				ATOM.user.position.z += (event.pageY - ATOM.mouse.y);
				if(ATOM.user.position.z > 0){
					ATOM.user.position.z = 0;
				}
				if(ATOM.user.position.z < -1000){
					ATOM.user.position.z = -1000;
				}
			}
			ATOM.mouse.x = event.pageX;
			ATOM.mouse.y = event.pageY;
		})
		.bind('mousewheel DOMMouseScroll', function (event){
			ATOM.user.position.z += event.originalEvent.wheelDelta/4;
			if(ATOM.user.position.z > 0){
				ATOM.user.position.z = 0;
			}
			if(ATOM.user.position.z < -1000){
				ATOM.user.position.z = -1000;
			}
		});
		
	$("body")
		.mouseup(function (event){
			if(event.which == 1){ // Left mouse
				ATOM.mouse.left_down = false;
			}
			if(event.which == 3){ // Right mouse
				ATOM.mouse.right_down = false;
			}
		});
}