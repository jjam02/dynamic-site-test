let Profile = require("./profile.js");
let view = require('./renderer.js')





//handle HTTP route GET /  and POST / 
function home(request, response) {
    if (request.url === "/") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        view.view("header", {}, response);
        view.view("search", {}, response);
        view.view("footer", {}, response);

        response.end();
    }
}

//Handle HTTP rouite GET /:username 

function user(request, response) {

    let username = request.url.replace("/", "");
    if (username.length) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        view.view("header", {}, response);

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
            view.view("profile", values, response)
            view.view("footer", {}, response);

            response.end();
        })

        studentProfile.on("error", function (error) {
            //show error
            view.view("error", {}, response);
            view.view("search", {}, response);
            view.view("footer", {}, response);
            response.end();
        });

    }
}

module.exports.home = home;
module.exports.user = user;