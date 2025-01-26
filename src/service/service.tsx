/***import fs from "fs";
const directoryPath = "./public/projectData/";
const files = fs.readdirSync(directoryPath);
//Read the contents of a directory asynchronously
export const projectData: any = {};
files.forEach((file: any, index: number) => {
  //const filecontent: any = fs.readFileSync(directoryPath + file, "utf8");
  projectData[`project${index}`] = file;
  console.log(`project${index}`, file);
});***/
