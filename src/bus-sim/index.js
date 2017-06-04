const readline = require('readline');
const cp = require('./command-processor');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var log = [];

rl.prompt();

rl.on('line', (line) => {
	line = line.trim().toUpperCase();
	if(line.startsWith("PLACE ") ) {
		var res = cp.place(line.substr(6));
		if(res===false) {
			log.push(`Invalid: ${line}`);
		}
		rl.prompt();
	} else if(line=="QUIT") {
		rl.close();
	} else {
		log.push(cp.process(line));
		rl.prompt();
	}
});

rl.on('close', () => {
	console.log('Finished.');
	console.log(log.join("\n"));
	process.exit(0);
});
