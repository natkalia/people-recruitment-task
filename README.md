# :baby: :boy: :older_woman: PEOPLE recruitment task :construction_worker: :man_with_turban::woman:

![HTML5](https://img.shields.io/badge/HTML-5-orange?style=flat)
![CSS3](https://img.shields.io/badge/CSS-3-green?style=flat)
![Javascript](https://img.shields.io/badge/Javascript-ES6-yellow?style=flat)
![React16](https://img.shields.io/badge/React-16-blue?style=flat)

React project created as recruitment task.

## Mock-up

<a href="https://user-images.githubusercontent.com/49140572/76698951-9f37e200-66a8-11ea-8208-a27a3a59f30d.png">
  <img 
    src="https://user-images.githubusercontent.com/49140572/76698951-9f37e200-66a8-11ea-8208-a27a3a59f30d.png" 
    alt="Mockup"
    width="500"
  >
</a>

## Live demo and setup for development

**Live:**: Coming soon, probably with Github Pages.

**Repository**: [https://github.com/natkalia/people-recruitment-task.git](https://github.com/natkalia/people-recruitment-task.git)

If you want to run this app at your local machine you have to **clone this repository** or just **download zip file** and unzip it locally. This is up to you. If you decide to clone this repo, you should use the below command in your command line tool: 
```bash
git clone https://github.com/natkalia/people-recruitment-task.git
```
After, move to the main folder of the app and use the following command which retrieves all dependencies necessary to build our application:
```bash
npm install
```
If the previous commands was executed successfully, it's time to start the app with the following command:
```bash
npm start
```
As a result you should be taken to a browser with application running on localhost.

## Features

Features of the mocked-up view required to be implemented as recruitment task:

* Button with plus on the bottom should add a new cell (I named it Card): a popup appears with the option to enter the cell content, 
and after confirming the popup content disappears and a new cell is created
* Button with plus in the Ethnicity section should add another cell to the Ethnicity section - similar to the above
* Button with minus to the right of Ethnicity - removes all of Ethnicity (and thus Black, Hispanic as well),
* Other buttons with minuses - they remove the cell in which they are located.

In my implemenentation:

* standard cells are named Cards
* Ethnicity section is a Card that includes SubCards (including cell with Ethinicity itself as a separate SubCard)
* mocked-up initial data are stored in dataStore.js

## Technologies and tools

Project was initialized with create-react-app for React.

Technologies used:

* HTML
* CSS, Sass, CSS modules
* Javascript ES6+
* create-react-app for React
* React
* Redux
* eslint for clean code
* shortid for generating random id
* prop-types for props validation
* node-sass for 
* other you can see in package.json dependencies

## Known bugs and/or To Do's

[ ] Data from dataStore.js could be stored as json or using a fake REST API
[ ] No possibility to add new Card with Subcards - this was not required at this stage
[ ] Custom popup could be added (e.g. or using external library)
[ ] Card Ethnicity is for now hardcoded, this could be replaced with more dynamic solution if more 
complicated cards could be rendered, especially if app would allow adding new Cards of similar structure (Card with SubCards)
[ ] Data for subcards could be structured differently, e.g not as nested arrays, but 
as separate object, connected with proper Card by using relevant Card id, depending on further assumptions on architecture
[ ] If all cards are deleted, design does not look well, mayble grey line should still be visible,
but this requires refactoring of grey vertical line solution or adding one more
[ ] Current solution is not compliant with RWD, media query breakpoints should be added in settings.scss

## Credits

* I used Google Font [Poppins](https://fonts.google.com/specimen/Poppins)
