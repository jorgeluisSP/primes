#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var prime = function(n){
    var i = 1;
    var c = 0;
    var seguir = true; 
    while ((i < n+1) && seguir)
    {       
       if ((Math.ceil(n/i)) == (Math.floor(n/i))){
          c++;
       }
       if ((c == 2) && (i<n)){
          seguir = false;
       } 
       i++;
    }
    if ((c == 2) && (seguir == 1)){
       return true;
    } else {
      return false;
    } 
 
}

var list  = function(k){
   var arr = [];
   var i = 1; 
   var q = 0;
   while(q < k){
      if (prime(i)) { 
         arr.push(i);
         q++;
      }
      i++;
   }
   return arr;
}

var fmt = function(arr){
   return arr.join("\n");
}

var k= 100;
fs.writeFileSync(outfile,list(k));
console.log("Script: " + __filename + "\nWrote: " + k + " first primes to file " + outfile);

