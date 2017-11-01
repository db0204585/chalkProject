//David and Austin Project in class
//November 1, 2017
//Markley

var lodash = require('lodash');
var chalk = require(`chalk`);
var jsonfile = require('jsonfile')

var file = 'data.json'
jsonfile.readFile(file, function(err, people) {

    lodash.forEach(people.items[0], function(value) {
        console.log(value);

    });

    lodash.forEach(people.items[1], function(value) {
        console.log(value);

    });
});


