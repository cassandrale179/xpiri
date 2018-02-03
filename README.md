# xpiri
Xpiry is a webapp written in AngularJS, with a backend using Firebase to monitor the food in your fridge. You can talk to your Google Assistant and asked it about the status of your food, to know more details about what's in your fridge, to make you a recipe,...etc.  

## How To Use
1. User enters in a list of food that they have bought at the market. 
2. The webapp will automatically remember when the user enter the food and calculate expiration date after each day pass.
3. Food about to expire soon will have a yellow progress bar, and food about to be rotten will have a dark red bar. 

## How I Build It 
The app itself is built using AngularJS ( a JavaScript MVC framework ) with a backend in Firebase. The data for expiration date is scraped using BeautifulSoup, a Python web scraper library. The recipe auto-generation is done through Angular HTTP, using Mashape API. The Google Assitant SDK is implemented through Dialogflow and deployed on Cloud Functions to integrate with the Firebase


## Packages
```
npm install twilio 
``` 
