![Hands holding black heart](/repository/psdC584.png?raw=true "Hands holding black heart")
# SocialSupport

After working in the mental health field for 10 years, I realized that some people with depressive symptoms could benefit from simple and accessible application that helps them track their support system. As a result, I created socialSupportFullStack. With this app, one can create and edit a list of social supports, which could potentially increase their sociability and decrease depressive symptoms. 

## How It's Made:

**Tech used:** EJS, CSS, JavaScript, Node.js, Express, passport.js

Back-end made entirely with Node.js. I used Sessions for authentication, and the Model View Controller (MCV) model to organize my code. 
Be sure to add an .env file that includes a: <br>
PORT = XXXX <br>
MONGO_URI = XXX (connection to MongoBD with your user and pass) <br>
GOOGLE_CLIENT_ID = XXX <br>
GOOGLE_CLIENT_SECRET = XXX <br>

This projects also includes two authenticaltion strategies: local and Google. 

## Optimizations

Instead of using two differnt files for authentication, schemas and authorizations, I slashed such code almost in half by combining the code for the authentications in one module. 

## Lessons Learned:

Adding Google authentication on top of a local authentication was more of a headache than I had anticipated. Make sure to include a googleRoute in in your server/app. <br> You must include googleId in your User.js file (in the model folder if you are using one), for googleauth to work.
