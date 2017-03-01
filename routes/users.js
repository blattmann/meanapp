const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  'use strict'; // needed to use 'let' inside the function
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({
        success: false,
        msg:'Failed to register user'
      });
    } else {
      res.json({
        success: true,
        msg:'User registered'
      });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check username
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({
        success: false,
        msg: 'User not found.'
      });
    }

    // Match password
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;

      if(isMatch) {
        // Password ok
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token, // The space after JWT is needed!!! Do NOT remove it!
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        // Password not ok
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }

    });
  });
});

// Profile --> protected via 'passport.authenticate('jwt', {session: false})'
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({
    user: req.user
  });
});

module.exports = router;
