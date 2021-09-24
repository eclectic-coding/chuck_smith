#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

// Welcome Header
welcome({
  title: pkgJSON.name,
  tagLine: `by ${pkgJSON.author.name}`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
});

console.log(`
Chuck Smith

Ruby on Rails developer specializing in front end development @ OpsCompass. 
Author and supporter of many open source projects. 

🐦 Twitter: https://twitter.com/EclecticCoding 
📖 GitHub: https://github.com/eclectic-coding
😎 Blog: https://eclecticsaddlebag.com
`);
