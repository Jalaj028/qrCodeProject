// 
//1-use the inquirer npm package to get user input

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message": "Type in your url",
   "name": "URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
 qr_svg.pipe(fs.createWriteStream("qr_img.png"));
 fs.writeFile("input.txt", url, (err) => {
    if(err) throw err;
    console.log("user input file is created");
 })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// inquirer
// .prompt([
//     {"message": "Type in your url",
//      "name": "URL"}
// ])
// .then((answers) => {
//     const url = answers.URL;
//     var qr_svg = qr.image(url);
// qr_svg.pipe(createWriteStream("./qr_img.png"));

// })
// .catch((err) => {
//     if(err.isTtyError) {

//     } else {

//     }
// });

//2-use the qr-image npm package to turn the user entered url to qr code image


//3-create a txt file to save the user input using the native fs node module

