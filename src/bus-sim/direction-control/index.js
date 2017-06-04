var direction = require('./direction.json');
const validDirs = Object.keys(direction);

const getDir = (oldDir) => {
	//check the direction is valid, default to north if not
	oldDir = (validDirs.indexOf(oldDir) > -1) ? oldDir : "NORTH";
	return direction[oldDir];
};

module.exports = {
	turnLeft: (oldDir) => getDir(oldDir).left,
	turnRight: (oldDir) => getDir(oldDir).right,
	doMove: (dir, pos) => {
		var dObj = getDir(dir);
		pos.x += dObj.dx;
		pos.y += dObj.dy;
		return pos;
	}
}
