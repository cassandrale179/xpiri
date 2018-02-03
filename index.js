'use strict';
process.env.DEBUG = 'actions-on-google:*';

const Assistant = require('actions-on-google').ApiAiAssistant;
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const statusRef= admin.database().ref('/status');
const countRef = admin.database().ref('/count');
const recipeRef= admin.database().ref('/recipetitle');

// Dialogflow Intent names
const PLAY_INTENT = 'play';
const DETAILS_INTENT = 'details';
const RECIPE_INTENT = 'findrecipe';

// Contexts
const WELCOME_CONTEXT = 'welcome';
const QUESTION_CONTEXT = 'question';

// Context Parameters
const ID_PARAM = 'id';
const BRANCH_PARAM = 'branch';
const ANSWER_PARAM = 'answer';
const QUESTION_PARAM = 'question';

exports.assistantcodelab = functions.https.onRequest((request, response) => {
   console.log('headers: ' + JSON.stringify(request.headers));
   console.log('body: ' + JSON.stringify(request.body));

   const assistant = new Assistant({request: request, response: response});

   let actionMap = new Map();
   actionMap.set(PLAY_INTENT, play);
   actionMap.set(DETAILS_INTENT, details);
   actionMap.set(RECIPE_INTENT, findrecipe);
   assistant.handleRequest(actionMap);

   //--------- DESCRIBE TO THE USER THE STATUS OF THE FOOD -------
   function play(assistant) {
       countRef.once('value', snap => {
           const speech = `Okay, you currently have ${snap.val().e} expired food, ${snap.val().g} food in good status, and ${snap.val().s} that is stale. Would you like to know more details?`;
           assistant.ask(speech);
       });

   }

   //--------- GET MORE DETAILS ABOUT THE FOOD --------
   function details(assistant){
       statusRef.once('value', snap => {
           const speech = `Okay, you currently have ${snap.val().good} that are good, ${snap.val().stale} that are stale, and
           ${snap.val().expired} that are expired`;
           assistant.ask(speech);
       })


       // const speech = `Okay, you have chicken, brocolli, and apple that has already expired. You have chocolate cake about to expire soon, and your donuts are still in good condition. Would you like to get a recipe ?`;
       assistant.ask(speech);
   }


   //-------- GET A RECIPE -------
   function findrecipe(assistant){
       recipeRef.once('value', snap => {
           const speech = `Okay, I found a recipe for you. It's a dish called ${snap.val().title} For more information, check out the website. Can I help you with anything else?`;
           assistant.ask(speech);
       });
   }

});
