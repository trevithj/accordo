process.stdin.setEncoding('utf8');

var run = () => {
	console.log("Hello world");


	process.stdin.on('readable', () => {
	  const chunk = process.stdin.read();
	  if (chunk !== null) {
		process.stdout.write(`data: ${chunk}`);
	  }
	});

	process.stdin.on('end', () => {
	  process.stdout.write('end');
	});
};

module.exports = run;
run();
