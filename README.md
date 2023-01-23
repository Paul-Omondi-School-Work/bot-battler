### Bot Collection

This project is a simple React application that allows users to view a collection of bots, add them to their army, and release or discharge them.

# Getting Started

To run the project locally, you will need to have Node.js and npm (or yarn) installed. Once you have those, you can clone the repository and run the following commands in the project directory:

npx json-server --watch db.json
npm install
npm start

This will start a local development server and open the application in your default browser.

## Features

View profiles of all bots in the BotCollection component.
Add an individual bot to the user's army by clicking on it. The bot will be rendered in the YourBotArmy component. The bot can be enlisted only once.
Release a bot from the user's army by clicking on it. The bot will disappear from the YourBotArmy component.
Discharge a bot from their service forever by clicking the red "x" button. This will delete the bot from the backend and from the YourBotArmy on the frontend.

# Data

The data for the bots is fetched from the following API endpoint: http://localhost:3000/bots

# Technical Details

This project was bootstrapped with Create React App and uses React for the frontend and fetch for making HTTP requests to the API.

# Author

This project is developed by Paul Ochieng Omondi

# Acknowledgements

Thanks to Create React App for providing the initial setup and development tools for the project.
