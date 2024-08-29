let Profile = require("./profile.js");





//handle HTTP route GET /  and POST / 
function home(request, response) {
    if (request.url === "/") {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write("Header\n");
        response.write("Search\n");
        response.end('Footer\n');
    }
}

//Handle HTTP rouite GET /:username 

function user(request, response) {
    let username = request.url.replace("/", "");
    if (username.length) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write("Header\n");

        //get JSON from API call
        let studentProfile = new Profile("/profiles/" + username);

        studentProfile.on("end", function (profileJSON) {
            //store the values that are needed

            let values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript

            }
            //simple reponse
            response.write(values.username + " has " + values.badges + " badges \n");
            response.end('Footer\n');
        })

        studentProfile.on("error", function (error) {
            //show error
            response.write(error.message.slice(1) + "\n");
            response.write(error.message + '\n');
            response.end('Footer\n');
        });

    }
}

module.exports.home = home;
module.exports.user = user;