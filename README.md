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

## How to setup the environment
This application is based on Nodejs. Therefore Nodejs (and the Node Paackage Manager) needs to be installed on the machine. 
- Go to https://nodejs.org/
- Select the version that is "Recommended for most users"
- Install Node by double-clicking on the downloaded file and following the installation prompts
- Once installation is finished, check if Nodejs is installed correctly with the terminal command:
```
node -v
```
If the terminal returns something similar to v16.11.1 Node has been installed successfully

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

The specification file required to extract specific information after consuming the API (name, mbid, url,
image_small, image)
Checking with Postman the response of a random artist search (cher) the first 4 fields were accessible while the last one contained an array of different sized pictures. 

<a href="https://ibb.co/QjRF9Wc"><img src="https://i.ibb.co/6JxRYKZ/image.png" alt="image" border="0"></a>

I though of an update of the API response, so I've skipped that field. 