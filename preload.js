console.log("hello preload")


const fs = require('fs')
const path = require('path')

window.launchfox = {

	readPackage: function(){
		var projectDir = path.join(__dirname, '..', '..');
		var packageJsonContent = fs.readFileSync(path.join(projectDir, 'package.json'))
		return JSON.parse(packageJsonContent)
	},
	writePackage: function(content){
		var str = JSON.stringify(content);
		fs.writeFileSync(path.join(__dirname,'../../test.json'), str)
	}

}