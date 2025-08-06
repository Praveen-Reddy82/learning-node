import {save, on} from "./utils.js";
on("file:saved",({location,data})=>{
console.log(`File saved at ${location}`);
});
console.log("Saving file...");
save("./newFile.txt","Hello World!")
.catch(()=> console.log("Erro occured while saving the file"));

console.log("The file is being saved");

