var fileSystem = require('fs');

// Write a file
sampleText = 'Test which is to written inside the file';

fileSystem.writeFile('Files/sample.txt',sampleText,()=>{
    console.log('completed');
})

// dmanically create files
for(let i=0; i<10; i++) {
    fileSystem.writeFile(`Backup/text${i}.txt`,sampleText, ()=> {
        console.log('writing completed');
    })
}


fileSystem.readFile('./../Files/sample.txt', 'UTF-8', (err, data)=> {
    if(err) {
        console.log("error is", err);
    }
    console.log(data);
})

fileSystem.readdir('./../Notes', (err, files)=> {
    console.log(files);
})

fileSystem.appendFile('./../Files/sample.txt', 'Appended hahaha', ()=> {
    console.log('done');
})

fileSystem.unlink('./../Backup/text9.txt',(err)=> {
    if(err) {
        console.log(err)
    }
    console.log('deleted');
})

const temp = [
    {
        'name':'sample',
        age:20
    }
]

console.log(JSON.stringify(temp));

const x = JSON.stringify(temp);

console.log(JSON.parse(x)[0].name);

fileSystem.writeFile('./../Files/temp.json',x,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('done');
})