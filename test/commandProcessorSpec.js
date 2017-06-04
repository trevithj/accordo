const expect = require('chai').expect;
const cp = require('../src/bus-sim/command-processor');
var res;

describe('Command Processor', function() {
	var proc = cp.process;
	var plc = cp.place;

	describe('#place', function() {
		it('should accept valid pos', function() {
			res = plc("place 0,0,SOUTH".substr(6));
			expect(res).to.be.true;
		});
		it('should flag invalid pos', function() {
			res = plc("10,-2,WEST");
			expect(res).to.be.false;
		});
	});

	describe('#process', function() {
		//relies on place() working correctly
		it('should handle MOVE cmd', function() {
			plc("2,3,WEST");
			res = proc('move');
			expect(res.x).to.equal(1);
			expect(res.y).to.equal(3);
		});
		it('should prevent exiting park', function() {
			plc("0,3,WEST");
			res = proc('move');
			expect(res.x).to.equal(0);
			expect(res.y).to.equal(3);
		});
		it('should handle LEFT cmd', function() {
			plc("0,0,NORTH");
			res = proc('LEFT');
			expect(res).to.equal("WEST");
		});
		it('should handle RIGHT cmd', function() {
			plc("0,0,NORTH");
			res = proc('Right');
			expect(res).to.equal("EAST");
		});
		it('should return null of cmd unknown', function() {
			plc("2,0,WEST");
			res = proc('fly away');
			expect(res).to.be.null;
			res = proc('left');
			expect(res).not.to.be.null;
		});
		it('should return null if pos is invalid', function() {
			plc("-1,10,WEST");
			res = proc('left');
			expect(res).to.be.null;
			res = proc('right');
			expect(res).to.be.null;
			res = proc('move');
			expect(res).to.be.null;
		});
	});

});
