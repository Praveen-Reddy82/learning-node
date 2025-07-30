import {readFileSync} from "node:fs";

try{
  let content=readFileSync("files/textFile.txt");
  console.log(`File context ${content}`);
}catch(err){
  console.error("You got an error", err);
}

