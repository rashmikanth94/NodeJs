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