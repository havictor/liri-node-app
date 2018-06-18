require("dotenv").config();
var keys = require("./keys.js")

var Spotify = require("node-spotify-api");
var Twit = require("twitter");

var spotify = new Spotify(keys.spotify);
var client = new Twit(keys.twitter);
var TwitParam = {
    q: "Victor64435930",
    count: 20
}

var aux;
var Spotify = require('node-spotify-api'); 

var command = process.argv[2];
if (process.argv[3] !== null) {//check if null output
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
            client.get("search/tweets", TwitParam, searchedData)
            function searchedData(error, data, response) {
                for (i = 0; i < 20; i++) {
                    if (data.statuses[i] !== undefined) {
                        console.log(`${data.statuses[i].text} tweeted on ${data.statuses[i].created_at}`);
                    }
                }
            }
            break;
        case "spotify-this-song":
            if (aux != null) {
                spotify
                .search({ type: 'track', query: aux })
                .then(function(response) {
                console.log(`Artist: ${response.tracks.items[0].album.artists[0].name}`);
                console.log(`Song Name: ${response.tracks.items[0].name}`);
                console.log(`Album: ${response.tracks.items[0].album.name}`);
                console.log(`Preview Link: ${response.tracks.items[0].preview_url}`)
                })
                .catch(function(err) {
                console.log(err);
                });
            }
            else {
                console.log("You have not selected a song, so I have chosen The Sign by Ace of Base for you")
                spotify
                .search({ type: 'track', query: "The Sign by ace of base" })
                .then (function(response) {
                    console.log(`Artist: ${response.tracks.items[0].album.artists[0].name}`);
                    console.log(`Song Name: ${response.tracks.items[0].name}`);
                    console.log(`Album: ${response.tracks.items[0].album.name}`);
                    console.log(`Preview Link: ${response.tracks.items[0].preview_url}`);
                    console.log("You also like karaoke now");
                })                
                .catch(function(err) {
                    console.log(err);
                });
            }
            break;
        case "movie-this":

            break;
        case "do-what-it-says":
            //set new command & aux

            //liri(); //new random command
            break;
        default:
            console.log("That is not a valid command, please use my-tweets, spotify-this-song, movie-this, or do-what-it-says")
    }
}