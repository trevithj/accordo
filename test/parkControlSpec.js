var expect = require('chai').expect;
var pc = require('../src/bus-sim/park-control');

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
	describe('#isValidPos', function() {
		it('should flag when pos is outside the park', function() {
			pc.setSize(30,30);
			expect(pc.isValidPos({x:20, y:20})).to.be.true;
			pc.setSize(3,3);
			expect(pc.isValidPos({x:20, y:20})).to.be.false;
			expect(pc.isValidPos({x:2, y:20})).to.be.false;
			expect(pc.isValidPos({x:2, y:1})).to.be.true;
			expect(pc.isValidPos({x:20, y:1})).to.be.false;
		});
	});
});
