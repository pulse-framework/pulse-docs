const klaw = require('klaw');
const path = require('path')
const through2 = require('through2')
const fm = require('gray-matter');

// const mdRoutes = {};
const folder = path.resolve('src/content/docs');
// console.log(folder);
let obj = {
	items: []
}
const getMdFilePaths = through2.obj(function (item, enc, next) {
  if (path.extname(item.path) === '.md') {
    obj.items.push({
		path: cleanPath(item),
		data: fm.read(item.path).data,
		excerpt: fm.read(item.path).excerpt,
		content: fm.read(item.path).content,
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
	console.dir(obj.items)
  })

const cleanPath = (dir) => {
	const dirPath = dir.path
	const pathFix = dirPath.replace('.md', '')
	const derp = pathFix.split(/\\docs/ig)
	const slashFix = derp[1].split('\\')
	slashFix.shift()
	// pathFix.
	return slashFix
}

const generateManifest = () => {

}