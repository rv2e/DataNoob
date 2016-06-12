var childProcess = require('child_process');
var temp = require('temp');
var fs = require('fs');
var uuid = require('node-uuid');
var bb = require('bluebird');

var executeProcessInTempFile = function(processToExecute, data, language) {
  return new Promise(function(resolve, reject) {
    temp.track();
    temp.open('temp', function(err, info) {
      if (err) return reject(err);
      fs.write(info.fd, data);
      fs.close(info.fd, function(err) {
        if (err) return reject(err);
        return resolve(processToExecute(info.path, language));
      });
    });
  });
}

var executeProcess = function(filePath, language) {
  return new Promise(function(resolve) {
    childProcess.exec(language + ' ' + filePath, function(err, stdout, stderr) {
      var dataToReturn = err ? err.message : stdout;
      resolve(dataToReturn)
    });
  });
}

module.exports = executeProcessInTempFile.bind(null, executeProcess);
