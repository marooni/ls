
//
// nodejs implementation of the ls command
//

// includes
//
var fs = require('fs');


// arguments handling
//

//process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
//});

var args = process.argv.slice(2);
var options = '';
var path = '.';

if (args.length == 0) {
	// use default path and options
}
else if (args.length == 1) {
	if (args[0].startsWith('-')) {
		options = args[0];
	}
	else {
		path = args[0];
	}
}
else if (args.length == 2) {
	if (args[0].startsWith('-')) {
		options = args[0];
	}
	else {
		console.error('Invalid option. Must start with -');
		console.error('Abort');
		exit(1);
	}
	path = args[1];
}
else {
	// more than one directory given
	// implemented later
}

console.log('options: %s', options);
console.log('path: %s', path);


// use async readdir function
var fileNames = fs.readdir(path, function (err, files) {
	console.log(files);
});



function exit(code) {
	process.exit(code);
}