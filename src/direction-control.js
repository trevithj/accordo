var direction = require('./direction.json');

module.exports = {
	turnLeft: (oldDir) => direction[oldDir].left,
	turnRight: (oldDir) => direction[oldDir].right,
	doMove: (dir, pos) => {
		var dObj = direction[dir];
		pos.x += dObj.dx;
		pos.y += dObj.dy;
		return pos;
	}
}
