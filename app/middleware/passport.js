const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      let users;
      try {
        users = await userModel.find({ username: username });

        if (users.length == 0)
          return done(null, false, { message: "Incorrect username !!" });

        const challengeResult = await bcrypt.compare(password,users[0].password);

        if (!challengeResult) 
          return done(null, false, { message: "Incorrect password !!" });
        
        return done(null, users[0]);
      } catch (error) {
        done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser(async (user, done) => {
    try {
      let users = await userModel.find({ username: user.username });
      done(null, users[0]);
    } catch (error) {
      done(new Error(error), null);
    }
  });

  app.use(passport.initialize());
  app.use(passport.session());
};
