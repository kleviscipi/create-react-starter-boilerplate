#!/usr/bin/env node
/**
 * 03-08-2018
 * Klevis Cipi
 */
'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const isDev = false;

const rootDir = path.join(__dirname, '.');
const packagesDir = path.join(rootDir, 'packages');
const packagesDirReactBoilerplate = packagesDir+"/react-core";

var copyRecursiveSyncFromPackagesToDestionation = function(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (exists && isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function(childItemName) {
          copyRecursiveSyncFromPackagesToDestionation(
            path.join(src, childItemName),
            path.join(dest, childItemName));
        });
    } else {
      fs.linkSync(src, dest);
    }
  };

const args = process.argv.slice(2);
console.log("Prepare......");

var initApp = function(args){
    if(typeof args[0] !="undefined" && args[0] !=""){
        let source = packagesDirReactBoilerplate;
        let nameApp = args[0]
        let destination = './'+nameApp; 
        console.log("Ok generate the react-starter-boilerplate with name: " + destination)
        if(isDev == false){
            var existsDest = fs.existsSync(destination)
            if(existsDest){
                console.log("Destination Dir exsist:"+destination)
                console.log("If you want the same name directory, delete the exist directory.")
            }else{
                copyRecursiveSyncFromPackagesToDestionation(source,destination);
                process.chdir(destination);
                console.log('Inside of dir : ' + process.cwd());
                console.log("Ok now will go to install dependencies")
                console.log("Installing..........")
                cp.execSync(' npm install ',function(err, stdout, stderr){
                    if(err){
                        console.log("Error.....",err)
                    }else{
                        console.log(stdout)
                    }
                });
                console.log("New App created :"+nameApp )
                console.log("Now for initialize thge local environment please take this commands:")
                console.log("----------------------------------------------")
                console.log(" cd  "+nameApp)
                console.log(" npm start ")
                console.log("----------------------------------------------")
            }
        }
    }else{
        console.log("Please enter a name for nee app like : my-app ")
    }
}

initApp(args);
