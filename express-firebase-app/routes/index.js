var express = require('express');
var fs = require('firebase-admin');
const db = fs.firestore();
var router = express.Router();
const userCollection = 'users';

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const userQureySnapshot = await db.collection(userCollection).get();
    const users = [];
    userQureySnapshot.forEach((docs) => {
      users.push({
        id: docs.id,
        data: docs.data(),
      });
    });
    res.render('pages/index' , {users});
    // res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }  
});

module.exports = router;
