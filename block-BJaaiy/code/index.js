let lod = require("lodash");
let moment = require("moment");

const mom = moment().format("LT");
let a = lod.difference([2, 1], [2, 3]);
console.log(a);
