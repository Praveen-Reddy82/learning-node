import {readFile} from "node:fs";
readFile("files/textFile.txt", (err, content)=>{
  if(err){
    console.error(err);  
    return ;
  }
 console.log(`The content of the File is as: ${content}`);
});

