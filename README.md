# xpiri
A Google Assistant SDK that monitor your refrigerator remotely. 


## How To Run This Web App
I did not attach any of the node modules in due to size issue, so there might be some issue with running this webapp locally.
User need to install AngularJS and livereload (compatible with Python 2.9) to run the app.

```
npm install angular --save 
pip install livereload
cd public
livereload
```

1. Most of the function are in a folder called public.
2. There is actually a separate zip file where I wrote most of the code for the Google Assistant, which is contain
in the xpiri-agent.zip file
3. To test this app on local phone, create account on Dialogflow and import the xpiri-agent.zip
4. Log onto the gmail account associated with Dialogflow, and said "Talk to my test app" 
