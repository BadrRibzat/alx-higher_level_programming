#!/usr/bin/node

//Script That Gets the contents of a webpage and store it in a file

const request = require('request');
const fs = require('fs');
const argv = process.argv;

request(argv[2], argv[3], function (err, response, body) {
  if (err) {
    console.log(err);
  }
  fs.writeFile(argv[3], body, 'utf8', function (err) {
    if (err) {
      console.log(err);
    }
  });
});
