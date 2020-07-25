var fs = require('fs')
var path = require('path')

var icons = {
	blank: getBase64String('blank'),
	active: getBase64String('active'),
	hover: getBase64String('hover')
}

function getBase64String (type) {
	return "data:image/svg+xml;base64," + fs.readFileSync(path.join(__dirname, `../dist/icons/${type}.svg`)).toString('base64')
}

fs.writeFileSync(path.join(__dirname, '../src/script/icons.json'), JSON.stringify(icons))