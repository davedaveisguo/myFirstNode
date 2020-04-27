const fs = require('fs')

fs.readFile('node.txt', 'utf-8',(err, data)=>{
	if(err) throw 'file not exists'
	console.log(data);
})


fs.unlink('node.txt', (err)=>{
	if(err) throw 'file deleted failed';
})
