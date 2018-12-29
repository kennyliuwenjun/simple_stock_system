# Praxis Stock App

## Notes about this projects:

- Because Praxis uses React, so I decided to use React for this project
- I could set up a server side for this project, however since its a 3-4 hours project, therefor I decided not to, instead I store data on localStorage, so it still can persist data when refresh the page
- I haven’t done any css to this project as I mentioned I am a more developer aspect rather than a designer
- I started on 17 Sep Monday 11 am, and stopped at 3:30 pm
- I haven’t considered false input, so if you try some false input, it will break

## How to Start the App:

1. needs node and npm environment
2. in terminal navigate to the main folder
3. run "npm install" to get all the modules needed
4. run "npm start" the app will start automatically and bring up the client browser

## How to use the App:

1. type any real world stock symbol (e.g APPL, GOOG) under "Search Stock" to fetch real time stock price, click search
2. if correct stock symbol found, it will show up that stock's price
3. you can deposit some money under "my balance" by typing the amount and clicking deposit
4. then you can buy that stock by typing the amount then click buy
5. once you have bought that stock, your balance is deducted from it and there should a list of all your current stocks holding showing up

## Tech used:

- React for front-end framework single-page application
- axios for real-time stock price fetching

## What could be improved if have more time:

- set up a server side with database storing all data
- add sell button to each stock having, and gives it function to be able to sell stock
- some css beautifier
