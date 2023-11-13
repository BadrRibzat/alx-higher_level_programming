#!/usr/bin/node

/**
 * A Script prints a message depending
 * on the number of arguments passed:
 * if no arguments are passed  print “No argument”
 * if only one argument is passed to the script, print “Argument found”
 * Otherwise, print “Arguments found”
 */

if (process.argv[2]) {
  console.log(process.argv[2]);
} else {
  console.log('No argument');
}
