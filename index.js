#!/usr/bin/env node

const replace = require('replace-in-file');
const path = require('path');


const options = {
    //Glob(s) 
    files: [
      `${process.cwd()}/*.svg`  
    ],
  
    //Replacement to make (string or regex) 
    from: /cls-/g,
    to: (...args) => `cls-${path.basename(args.pop().replace('.svg',''))}-`,
  };

  const results = replace.sync(options);
   
  console.log(results);


