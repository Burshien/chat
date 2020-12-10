var admin = require("firebase-admin");

var serviceAccount = require("../chat-a713f-firebase-adminsdk-pald0-9c551539cf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-a713f.firebaseio.com"
});

var db = admin.database();

module.exports = db;
