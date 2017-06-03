var assert = require('chai').assert;
var direction = require('../src/direction.json');
var dir = ["NORTH","SOUTH","EAST","WEST"];

describe('Direction data', function() {
	describe(' for all 4 directions', function() {

		it('should exist', function() {
			dir.forEach(dir => {
				assert.exists(direction[dir], dir+" isn't defined");
			});
		});
		it('should contain valid offsets', function() {
			dir.forEach(dir => {
				var d = direction[dir].dx + direction[dir].dy;
				assert.isOk(Math.abs(d)===1, dir+" offsets are invalid");
			});
		});
	});
});
