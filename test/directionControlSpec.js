var assert = require('chai').assert;
var dc = require('../src/direction-control.js');
var dir = ["NORTH","SOUTH","EAST","WEST"];

describe('Direction control', function() {
	describe('#turnLeft', function() {
		it('should return correct new direction', function() {
			assert.isOk("WEST"==dc.turnLeft("NORTH"), "Should be facing west!");
			assert.isOk("EAST"==dc.turnLeft("SOUTH"), "Should be facing east!");
		});
	});
	describe('#turnRight', function() {
		it('should return correct new direction', function() {
			assert.isOk("EAST"==dc.turnRight("NORTH"), "Should be facing east!");
			assert.isOk("WEST"==dc.turnRight("SOUTH"), "Should be facing west!");
		});
	});
	describe('#doMove', function() {
		it('should return correct new location', function() {
			var pos = {'x':0, 'y':0};
			pos = dc.doMove("NORTH", pos);
			pos = dc.doMove("EAST", pos);
			assert.isOk(pos.x===1, "Didn't move east!");
			assert.isOk(pos.y===1, "Didn't move north!");
		});
	});
});
