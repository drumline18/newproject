#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const argv = require('minimist')(process.argv.slice(2));
const generator = require('project-name-generator');

(async ()=>{
  
  const newProjectName = argv.n || argv.name || generator().dashed;
  const currentWorkingDirectory = process.cwd();
  const newDirectory = path.join(currentWorkingDirectory, newProjectName);

  let packages = [...argv._, argv.i || argv.install].join(' ') || false

  if(argv.h || argv.help) {
    try {
      const helpTextPath = path.join(__dirname, 'helptext.txt');
      const helpText = await fs.promises.readFile(helpTextPath, 'utf8')
      console.log(helpText);
      process.exit(0);
    } catch (err) {
      console.log("There was an error. Reference : #helpText");
      process.exit(1);
    }
  }

  try {
    await fs.promises.mkdir(newDirectory);
    process.chdir(newProjectName);
    await exec('npm init --y');
    if(packages) {
      await exec(`npm install ${packages}`)
    }
    await exec(`code .`);
    console.log(`New project created : ${newProjectName}`);
    process.exit(0);
  } catch (err) {
    console.log(err);
  }

})();
