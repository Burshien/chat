var admin = require("firebase-admin");
// 輸入自己的金鑰
var serviceAccount = require("../chat-a713f-firebase-adminsdk-pald0-9c551539cf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-a713f.firebaseio.com"
});

var db = admin.database();

module.exports = db;