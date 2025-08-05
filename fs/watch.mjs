import {watch} from "node:fs";

watch("./files/watch.txt",function(eventType,filename){
  console.log("---------------");  
  console.log(`EventType is ${eventType}`);
  if(filename)
    console.log(`File provided ${filename}`);
});

