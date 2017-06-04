var expect = require('chai').expect;
var dc = require('../src/bus-sim/direction-control');
var dir = ["NORTH","SOUTH","EAST","WEST"];

describe('Direction control', function() {
	describe('#turnLeft', function() {
		it('should return correct new direction', function() {
			expect(dc.turnLeft("NORTH")).to.equal("WEST");
			expect(dc.turnLeft("SOUTH")).to.equal("EAST");
		});
	});
	describe('#turnRight', function() {
		it('should return correct new direction', function() {
			expect(dc.turnRight("WEST")).to.equal("NORTH");
			expect(dc.turnRight("EAST")).to.equal("SOUTH");
		});
	});
	describe('#doMove', function() {
		it('should return correct new location', function() {
			var pos = {'x':0, 'y':0};
			pos = dc.doMove("NORTH", pos);
			pos = dc.doMove("EAST", pos);
			pos = dc.doMove("NORTH", pos);
			expect(pos.x).to.equal(1);
			expect(pos.y).to.equal(2);
		});
	});
});
