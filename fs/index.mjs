import {readFile} from "node:fs/promises";    //This "promises" is important 

readFile('files/textFile.txt')
.then(content=>console.log(`File content ${content}`))
.catch(err=>console.error(err));
