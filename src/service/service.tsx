const fs = require("fs");
const directoryPath = "./public/projectData/";
const files = fs.readdirSync(directoryPath);
//Read the contents of a directory asynchronously
export let projectData: any = [];
files.forEach((file: any) => {
  let filecontent: any = fs.readFileSync(directoryPath + file, "utf8");
  projectData.push(filecontent);
});
