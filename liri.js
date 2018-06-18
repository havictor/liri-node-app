require("dotenv").config();
var keys = require("./keys.js")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var aux
var Spotify = require('node-spotify-api'); 

var command = process.argv[2];
if (!process.argv[3] == null) {//check if null output
    aux = process.argv[3];
}
// else {
//     if (command == "spotify-this-song") {
//         aux = "The Sign by Ace of Base" //check syntax
//     }
//     else if (command == "movie-this") {
//         aux = "Mr. Nobody";
//     }
// };
liri();

function liri() {
    switch (command) {
        case "my-tweets":

            break;
        case "spotify-this-song":
        //  
            if (aux != null) {
                spotify
                .search({ type: 'track', query: aux })
                .then(function(response) {
                console.log(response);
                })
                .catch(function(err) {
                console.log(err);
                });
            }
            else {
                console.log("You have not selected a song, so I have chosen The Sign by Ace of Base for you"/n)
                spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
                    if (err) {
                    return console.log('Error occurred: ' + err);
                }
                    console.log(data);
                })
            }
        //
            break;
        case "movie-this":

            break;
        case "do-what-it-says":
            //set new command & aux

            liri();
            break;
        default:
            console.log("That is not a valid command, please use my-tweets, spotify-this-song, movie-this, or do-what-it-says")
    }
}