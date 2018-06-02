/* Imports */
import AppObject from './app.js'
// import $ from 'jquery';

var app = {}

/* Init the app */
// $(window).on('load', function () {
app = new AppObject('/')
app.init()
// })

/**
* Resize events
*/
// $(window).bind('resize', function () {
app.checkSearch()
// })

/**
* Scroll events
*/
// $(window).bind('scroll', function (event) {
// app.pinNav(event)
// })

/* Custom rules:
,
  "rules": {
    "no-multiple-empty-lines": [2, { "max": 2 }],
    "semi": ["error", "always"],
    "padded-blocks": [2, {
      "blocks": "never",
      "classes" : "always"
    }]
  }
*/
