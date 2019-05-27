var hello = require("./hello.js");
var uuidv1 = require('uuid/v1');
var _ = require("lodash");

console.log(`Generating uuid: ${uuidv1()}`);

var shuffled = _.shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);

var evenOdd = _.partition(shuffled, function (item ) { return !(item % 2); });

console.log(evenOdd);
