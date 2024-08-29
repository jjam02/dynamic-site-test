const fs = require("fs");

function view(templateName, values, response) {
    //read from teomplate files
    console.log(templateName)
    fs.readFile(templateName, function (err, data) {
        if (err) throw err;
        console.log(data.toString());
    })
    //Insert values in to the content

    // Write out to the response
}


module.exports.view = view;