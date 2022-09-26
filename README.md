# LASTfm Search Artist App

This app has been developed as a coding test for an interview.
The app is currently hosted on **[Render](https://lastfm-search.onrender.com/)** and **[Heroku](https://lastfm-search.herokuapp.com/)**.

## How to clone the repository

- Install [GIT](https://git-scm.com/) on your machine
- Navigate to the [repository](https://github.com/toNy5oo/artist_search_lastfm) page on GitHub and click on "Code", then copy the [link](https://github.com/toNy5oo/artist_search_lastfm.git)
- Open Git Bash and navigate to the directory where you would like to clone the repository in
- Type the following code and press enter
```
git clone https://github.com/toNy5oo/artist_search_lastfm.git
```

## How to retrieve the API_KEY
The app uses LAST.fm API. In order to be able to fetch the data, after cloning the repository, a file called "lastfm.env" needs to be created in the root of the project.

This file needs to contain the text 
```
LASTFM_KEY=[YOUR_KEY]
``` 
where [YOUR_KEY] is the key you will be able to get after filling up this form: 
https://www.last.fm/api/account/create

## How to setup the environment
This application is based on Node.js. Therefore Node.js (and the Node Paackage Manager) needs to be installed on the machine. 
- Go to https://nodejs.org/
- Select the version that is "Recommended for most users"
- Install Node by double-clicking on the downloaded file and following the installation prompts
- Once installation is finished, check if Node.js is installed correctly with the terminal command:
```
node -v
```

If the terminal returns something similar to the following

```
node -v
v16.11.1 
```

Node.js has been installed successfully


## How to install and run the application
- In your terminal, navigate to the current directory where the repository has been cloned
- Type 
```
 npm install
```
This command will install the modules and dependencies needed in order to run the app
- Once the installation is finished, type

```
 npm start
```

to run the app
- Open the browser to http://localhost:3000

## Notes

The specification file required to extract specific informations after consuming the API (name, mbid, url, image_small, **image**)
After checking with Postman the response on a search for a random artist (cher), I've noticed that the first 4 fields required are simple strings, while the last one (image) is an array of pictures (the same one for every size and every search). 

<a href="https://ibb.co/QjRF9Wc"><img src="https://i.ibb.co/6JxRYKZ/image.png" alt="image" border="0"></a>

I've concluded that the API may have been updated since the code test was written and the response structure has changed.
Therefore I've skipped the image array while getting data from the response object.

In case my assumption was wrong, the implementation would be modified this way:
- As last field I would iterate the array received in response (item.image) creating a new array (imageArray) that would contain each single ['#text'] field of every object of the image array.

```
  imageArray = [item.image[0]['#text'],  item.image[1]['#text'], ... ,  item.image[image.length-1]['#text']]
 
```
- Creating a single item (string) out of the whole array

```
 imageArray.join(', ');
```
- and pushing it into the existing array with the previous retrieved fields.





