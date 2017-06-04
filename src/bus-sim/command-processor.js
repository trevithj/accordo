const dc = require('./direction-control');
const pc = require('./park-control');
var theBus = {
	pos: {x:-1, y:-1},
	dir: "NORTH"
};

pc.setSize(5,5);

const doPlace = (data) => {
	//no checks for valid data, expects "#,#,ABC" formatted string
	data = data.split(",");
	theBus.pos = {
		x: +data[0], y: +data[1]
	};
	theBus.dir = data[2];
	return pc.isValidPos(theBus.pos);
};

const doMove = () => {
	var pos = dc.doMove(theBus.dir, theBus.pos);
	theBus.pos = pc.checkPos(pos);
};


module.exports = {
	process: (cmd) => {
		if(pc.isValidPos(theBus.pos)===false) {
			return null;
		}//ignore

		cmd = cmd.trim().toLowerCase();
		switch(cmd) {
			case "move":
				doMove();
				return theBus.pos;
			case "left":
				theBus.dir = dc.turnLeft(theBus.dir);
				return theBus.dir;
			case "right":
				theBus.dir = dc.turnRight(theBus.dir);
				return theBus.dir;
			case "report":
				return theBus;
			default:
				console.log(`Unknown command: ${cmd}`);
				return null;
		}
	},
	place: doPlace
};
