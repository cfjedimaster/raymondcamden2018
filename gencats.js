#!/usr/bin/env node

/*
I'm a script to generate the empty category pages.
*/

const fs = require('fs');

let allCats = new Set();

// First, get every dang post so we can generate our unique cat list
let postSource = './_posts/';
let catDir = './categories/';

// credit: https://gist.github.com/qwtel/fd82ab097cbe1db50ded9505f183ccb8
const { promisify } = require('util');
const { resolve } = require('path');
const readdir = promisify(fs.readdir);
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

async function generateCats() {
	let files = await getFiles(postSource);
	console.log(`I've got ${files.length} files.`);
	// temp
	//files = files.slice(0,2000);
	files.forEach(f => {
		let contents = fs.readFileSync(f, 'utf8');
		let cats = parse(contents);
		//console.log('cats=',cats);
		cats.forEach(c => {
			allCats.add(c);
		});
	});

	//console.log(allCats);

	allCats.forEach(cat => {
		let fileName = catDir + cat.replace(/ /g,'+') + '.md';
		let capname = cat.charAt(0).toUpperCase() + cat.slice(1);
		// a few hacks
		if(capname === 'Coldfusion') capname = 'ColdFusion';
		if(capname === 'Static sites') capname = 'Static Sites';
		if(capname === 'Jquery') capname = 'jQuery';
		if(capname === 'Javascript') capname = 'JavaScript';
		if(capname === 'Html5') capname = 'HTML5';

		let contents = `---
layout: category
title: ${capname}
category: ${cat}
---
`;
		//console.log(cat, fileName, contents);
		fs.writeFileSync(fileName, contents);
	});

}

function parse(s) {
	// yeah this is shit
	let closing = s.indexOf('---',1);
	let fm = s.substring(3, closing).trim();
	let lines = fm.split('\n');
	let cats = [];
	lines.forEach(l => {
		if(l.indexOf('categories') === 0) {
			let catStr = l.replace('categories: ', '');
			catStr = catStr.replace(/[\[\]]/g,'');
			catStr = catStr.replace(/"/g,'').trim().toLowerCase();
			//console.log('catStr='+catStr+'=');
			cats = catStr.split(',');
		}
	});
	if(cats.length === 0) throw Error('No cats for '+s);
	return cats;
}

generateCats();