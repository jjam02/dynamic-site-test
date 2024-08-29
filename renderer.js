const fs = require("fs");

function view(templateName, values, response) {
    //read from teomplate files
    console.log(templateName)
    fileData = fs.readFileSync(`./views/${templateName}.html`);
    if (fileData) response.write(fileData);
    return;


    //Insert values in to the content

    // Write out to the response
}


module.exports.view = view;