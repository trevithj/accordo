const readline = require('readline');
const cp = require('./command-processor');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.prompt();

rl.on('line', (line) => {
	line = line.trim().toUpperCase();
	var res;
	if(line.startsWith("PLACE ") ) {
		res = cp.place(line.substr(6));
		if(res===false) {
			console.log(`Invalid: ${line}`);
		}
		rl.prompt();
	} else if(line=="QUIT") {
		rl.close();
	} else {
		res = cp.process(line);
		if(line==="REPORT") {
			var loc = res.pos;
			console.log(`Location:(${loc.x},${loc.y}) facing ${res.dir}`);
		}
		rl.prompt();
	}
});

rl.on('close', () => {
	console.log('Finished.');
	process.exit(0);
});
