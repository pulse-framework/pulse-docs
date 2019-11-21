const fs = require("fs");
const klaw = require('klaw');
const path = require('path')
const through2 = require('through2')
const fm = require('gray-matter');
const folder = path.resolve('src/content/docs');

let obj = {}

const getMdFilePaths = through2.obj(function (item, enc, next) {
  if (path.extname(item.path) === '.md') {
	let version = getVersion(item)
	if (!obj[version]) obj[version] = [];
    obj[version].push({
		path: cleanPath(item),
		version,
		rawPath: rawPath(item),
		data: fm.read(item.path).data,
		slug: `${version}-${slugPath(item)}`,
		content: fm.read(item.path).content,
		excerpt: fm.read(item.path).excerpt,
		isEmpty: fm.read(item.path).isEmpty
	})
  }
  this.push(item)
  next()
})
klaw(folder)
  .pipe(getMdFilePaths)
  .on('data', item => {
		// console.log(item)
	})

  .on('error', (err, item) => {
    console.log(err.message)
    console.log(item.path) // the file the error occurred on
  })
  .on('end', () =>  {
	// console.dir(obj.items)
	generateManifest()
  })
const slugPath =(dir) => {
	const path = cleanPath(dir).split('/') 
	return path.pop().toString()
}
// Clean the path
const cleanPath = (dir) => {
	const dirPath = dir.path
	const pathFix = dirPath.replace('.md', '')
	const docsPath = pathFix.split(/\\docs/ig)
	const slashFix = docsPath[1].split('\\')
	slashFix.shift()
	slashFix.unshift('docs')
	const lower = slashFix.join('/').toString().toLowerCase()	//slashFix.append('/')
	return lower
}
// Get the version from the path
const getVersion = (dir) => {
	const dirPath = dir.path
	const pathFix = dirPath.replace('.md', '')
	const docsPath = pathFix.split(/\\docs/ig)
	const slashFix = docsPath[1].split('\\')
	slashFix.shift()
	slashFix.unshift('docs')
	const lower = slashFix[1]	//slashFix.append('/')
	return lower
}
// const slugify = (string) => {
// 	const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
// 	const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
// 	const p = new RegExp(a.split('').join('|'), 'g')
  
// 	return string.toString().toLowerCase()
// 	  .replace(/\s+/g, '-') // Replace spaces with -
// 	  .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
// 	  .replace(/&/g, '-and-') // Replace & with 'and'
// 	  .replace(/[^\w\-]+/g, '') // Remove all non-word characters
// 	  .replace(/\-\-+/g, '-') // Replace multiple - with single -
// 	  .replace(/^-+/, '') // Trim - from start of text
// 	  .replace(/-+$/, '') // Trim - from end of text
//   }
// Clean the path to get the right
const rawPath = (dir) => {
	// Path of the directory
	const dirPath = dir.path
	// Match Items in the docs DIR
	const docsPath = dirPath.split(/\\docs/ig)
	// Fix windows slashes
	const slashFix = docsPath[1].split('\\')
	slashFix.shift()
	slashFix.unshift('docs')
	const lower = slashFix.join('/').toString().toLowerCase()
	return lower
}

const generateManifest = () => {
	fs.writeFile("src/static/manifest.json", JSON.stringify(obj, null, 2), (err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("Manifest has been created");
	});
}