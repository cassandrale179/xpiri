# xpiri
A Google Assistant SDK that monitor your refrigerator remotely. 


## How To Run This Web App
I did not attach any of the node modules in due to size issue, so there might be some issue with running this webapp locally.
User need to install Node.js, AngularJS, Firebase CLI and livereload (compatible with Python 2.9) to run the app.

- To run the webapp: 
```
npm install angular@1.6.7
python -m pip install livereload
cd public
livereload
```

- To run the agent: 
```
npm install -g firebase-tools 
cd functions
npm install --save actions-on-google  
firebase login
firebase init
firebase deploy
``` 


## Structure of folder 
1. *webapp/public*: this is where most of the source code of the webapp is. 
2. *firebase-assistant-codelab/functions*: this is where most of the code for the Dialogflow agent 
3. *xpiri-agent.zip*: most of the intents on Dialogflow is done using webhook, so to talk with the Google Asssitant on the phone, create a Dialogflow account and create a new agent by importing the zip file.
4. *database-info.json*: most of the expiration date is stored in a json file. To access the database, create a Firebase account and import the json file. 
5. Log onto the gmail account associated with Dialogflow, and said "Talk to my test app" to access the agent 


## For more information
Devpost: https://devpost.com/software/xpiry 


