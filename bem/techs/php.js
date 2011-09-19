var myPath = require('bem/lib/path'),
    fs = require('fs'),
    Template = require('bem/lib/template');

exports.techModule = module;

exports.outFile = function (relfile, file) {
    return [ fs.readFileSync(file) ].join('\n');
};
