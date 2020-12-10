var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyAfRJ0b_ysjs_tUiMj1kl7XpYf7IaXuq6U",
    authDomain: "chat-a713f.firebaseapp.com",
    databaseURL: "https://chat-a713f.firebaseio.com",
    projectId: "chat-a713f",
    storageBucket: "chat-a713f.appspot.com",
    messagingSenderId: "520452890487",
    appId: "1:520452890487:web:f9d7e6ee3ff5edb93d8b72",
    measurementId: "G-G75FMH47FN"
};

firebase.initializeApp(firebaseConfig);


module.exports = firebase;
