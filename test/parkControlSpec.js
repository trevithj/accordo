var expect = require('chai').expect;
var pc = require('../src/park-control.js');

describe('Parking space control', function() {
	describe('#checkPos', function() {
		it('should keep position within the lower bounds of the park', function() {
			var pos = {x:-10, y:-20};
			pos = pc.checkPos(pos);
			expect(pos.x).to.equal(0);
			expect(pos.y).to.equal(0);

		});
		it('should keep position within the upper bounds of the park', function() {
			var pos = {x:20, y:20};
			pc.setSize(6,7);
			pos = pc.checkPos(pos);
			expect(pos.x+1).to.equal(6);
			expect(pos.y+1).to.equal(7);
		});
	});
});
