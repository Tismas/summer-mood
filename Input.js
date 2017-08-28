class Keyboard {
	constructor() {
		this.keys = [];
		window.onkeydown = this.handleKeyDown.bind(this);
		window.onkeyup = this.handleKeyUp.bind(this);

		this.LEFT = 37;
		this.UP = 38;
		this.RIGHT = 39;
		this.DOWN = 40;
		this.W = 87;
		this.S = 83;
		this.A = 65;
		this.D = 68;
		this.Z = 90;
		this.ENTER = 13;
		this.SPACE = 32;
	}

	handleKeyUp(e) {
		this.keys[e.keyCode] = false;
	}
	handleKeyDown(e) {
		// console.log(e.keyCode);
		this.keys[e.keyCode] = true;
	}
}

class Mouse {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.LBD = false;
		window.onmousemove = this.handleMouseMove.bind(this);
		window.onmousedown = this.handleLBD.bind(this);
		window.onmouseup = this.handleLBU.bind(this);
	}

	handleMouseMove(e) {
		this.x = e.clientX;
		this.y = e.clientY;
	}

	getRelativePos(offset, scale) {
		return {
			x: (this.x - offset.x) * scale.x,
			y: (this.y - offset.y) * scale.y
		}
	}

	handleLBD(e) {
		this.LBD = true;
	}
	handleLBU(e) {
		this.LBD = false;
	}
}
