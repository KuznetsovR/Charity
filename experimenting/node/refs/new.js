const fs = require('fs')
const path = require('path')

fs.appendFile(path.join(__dirname, 'events_ref.js'), '', (err)=> {
    if(err) throw new Error(err)
    console.log(123);
})