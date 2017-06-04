/* Ensures a position object remains within the given bounds.
 * For now, assume the origin (x1,y1) is always 0,0.
 * */

var x1=0, y1=0, x2=5, y2=5;

module.exports = {
	setSize: (w,h) => {
		x2 = Math.max(0, x1+w-1);
		y2 = Math.max(0, y1+h-1);
	},
	checkPos: (pos) => {
		pos.x = Math.max(x1, pos.x);
		pos.x = Math.min(x2, pos.x);
		pos.y = Math.max(y1, pos.y);
		pos.y = Math.min(y2, pos.y);
		return pos;
	},
	isValidPos: (pos) => {
		if(pos.x < x1) return false;
		if(pos.y < y1) return false;
		if(pos.x > x2) return false;
		if(pos.y > y2) return false;
		return true;
	}
}
