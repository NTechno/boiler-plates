var admin = require("firebase-admin");
const { getStorage } = require('firebase-admin/storage');


var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ts-invoice-b9ec1-default-rtdb.firebaseio.com",
  storageBucket: "gs://ts-invoice-b9ec1.appspot.com",
});

// const bucket = admin.storage.bucket(serviceAccount.storageBucket);
const bucket = getStorage().bucket("gs://ts-invoice-b9ec1.appspot.com");


module.exports = { admin , bucket};
