//Modules required
const express = require('express');
const fs = require('fs');
const app = express();
const axios = require('axios');

//Set env variables from file (API Key of LAST.fm account)
require('dotenv').config({ path: __dirname + '/lastfm.env' })

//Static resources accessible from Public Folder
app.use(express.static(__dirname + '/public'));

//Setting view engine
app.set('view engine', 'ejs')

//Get on "/search"
app.get('/search', (req, res) => {
    //Get the artist name from query params
    const { artist } = req.query;
    //Get KEY from ENV variables
    const KEY = process.env.LASTFM_KEY;

    //Fetch data on lastfm api with KEY and artist gotten from input field in form
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${KEY}&format=json`)
        //If success
        .then(function(response) {
            const data = response.data;
            //Browsing the object tree to get the wanted data
            const artistList = data.results.artistmatches.artist;
            //String to be written on csv file
            let csvReadyString = "";

            //Response array is empty
            if (!artistList.length) {
                // kjhsadjyuag returns empty array
                //Get raw file from fs
                let jsonFileRaw = fs.readFileSync(__dirname + "/public/json/defaultArtists.json");
                //Parse JSON content
                let randomArtists = JSON.parse(jsonFileRaw);
                //Set string ready to be written on file
                csvReadyString = Object.values(randomArtists.list).join(",\r\n")
            } else {
                //Response array.length is > 0 | Skimming data that need to be written from response object and put into array 
                //Iterate on list of results
                artistList.map(item => {
                    //Each line a new artist with only info needed
                    let newLine = [
                            item.name,
                            item.mbid ? item.mbid : "N\\A",
                            item.url,
                            item.image[0]['#text'] ? item.image[0]['#text'] : "N\\A",
                        ]
                        //Parsing the new line into a full string with ", " after each entry and a new line for each item
                    csvReadyString += `${newLine.join(', ')}\r\n`;
                })
            }
            //Writing the string into a file named [artist_searched.csv]
            writeOnCSVFile(csvReadyString, artist);
            //Render result page with file to be downloaded
            res.render('search.ejs', { fileName: `/files/${artist}.csv` })

        })
        //If error render error page
        .catch(function(error) {
            res.render('error.ejs')
            console.log(error);
        })
})

function writeOnCSVFile(stringToSave, filename) {
    //Write array of artists in files/{artistname}.csv
    fs.writeFileSync(__dirname + "/public/files/" + filename + '.csv', stringToSave);
}

//Get requests on root
app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(process.env.PORT || 3000, () => console.log('Server is listening'))