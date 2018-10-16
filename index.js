const express = require('express');
const passport = require('passport');
const g_strat = require('passport-google-oauth20').Strategy;
const keys = require('./config/key');

const app = express();
//need to download config to get secrets
passport.use(new  g_strat({
  clientID: keys.googleClientID,
  clientSecert: keys.googleClientSecert,
  callbackURL: '/auth/google/callback'
}, (accessToken) =>{
  console.log(accessToken);
}
));
//we are going to do this alot
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));



const PORT = process.env.PORT || 5000;
app.listen(PORT);
