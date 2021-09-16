
# Natural Disaster Tracker

> This is a React app to track natural disasters and plot them on a Google map.

![image](https://user-images.githubusercontent.com/70108451/133553596-72109fba-5045-4e42-9ce3-d6b429c9ef84.png)

## Design
This project was designed with React.js and deployed on Vercel
* Google's Map API was utilized for the Geographic UI Layout and For plotting Data 
* NASA's EONET API was used to fetch the disaster data and location

## Usage

```
npm install
npm start

# Build
npm run build
or
yarn build
```
## Reflection 
### My Experience
This project was one of my first experiences with React and working with some of the hooks. It was a simple yet fulfilling process that showed the basics of the library and interacting with live data. 

I am glad this was one of my first projects that I created for myself with React.

###  What I would change
* The web site UI would have a few more pages or displays for the user. Currently there is only a single page and slight changes of icons based on the data being rendered.
* Typescript would be used likely with the Gatsby framework to simplify debugging and make use of Gatsby's Static Site Generating features.
* Additional resources might be fetched from an auxilliary API to display more related data or resources for users of the site.
* I would likely use a more robust UI library such as React.js with Chakra or Material UI and add TypeScript.


## API Keys

You will need to add your Google Maps API key in the Map.js component and register for a NASA API key at https://api.nasa.gov. If you deploy, please move the keys to a safe place

## This project is inspired by bradtraversy's wildfire-tracker app
 Visit his repository at [https://github.com/bradtraversy/wildfire-tracker](https://github.com/bradtraversy/wildfire-tracker)
