const express = require("express");
var admin = require("firebase-admin");
const uuid = require("uuid-v4");
const Multer = require('multer');
const db = admin.firestore();
const articleCollection = "article";

const createarticle = async (req, res, next) => {
  console.log('into the crete user');
  try {
    const article = req.body;     
    const newDoc = await db.collection(articleCollection).add(article);    
    res.render("pages/article/add", {});
  } catch (error) {
    res
      .status(400)
      .send(`Something is not working!!!`);
  }
};

const uploadFile = async (filename) => {
  const metadata = {
    metadata: {
      // This line is very important. It's to create a download token.
      firebaseStorageDownloadTokens: uuid(),
    },
    cacheControl: "public, max-age=31536000",
  };

  // Uploads a local file to the bucket
  await bucket.upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    metadata: metadata,
  });
  console.log(`${filename} uploaded.`);
};

const uploadFileToStorage = async (filename) => {
  const metadata = {
    metadata: {
      // This line is very important. It's to create a download token.
      firebaseStorageDownloadTokens: uuid(),
    },
    cacheControl: "public, max-age=31536000",
  };

  // Uploads a local file to the bucket
  await bucket.upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: false,
    metadata: metadata,
  });
  console.log(`${filename} uploaded.`);
};


const renderCreateArticle = (req, res, next)=>{
    console.log("into controler..")
   
    try {
        // const userQureySnapshot = await db.collection(articleCollection).get();
        // const articles = [];
        // userQureySnapshot.forEach((docs) => {
        //   articles.push({
        //     id: docs.id,
        //     data: docs.data(),
        //   });
        // });
        // res.render("pages/article/list", { articles });
        res.render("pages/article/add");
        // res.status(200).json(users);
      } catch (error) {
        console.log("ERRORR::", error);
        res.json(error);
      }
    // res.render("pages/article/list", { articles });
}

const articlelist = async (req, res, next) => {
  try {
    const userQureySnapshot = await db.collection(articleCollection).get();
    const articles = [];
    userQureySnapshot.forEach((docs) => {
      articles.push({
        id: docs.id,
        data: docs.data(),
      });
    });
    res.render("pages/article/list", { articles });
    // res.status(200).json(users);
  } catch (error) {
    console.log("ERRORR::", error);
    res.json(error);
  }
};

const articledetail = (req, res, next) => {
  const userId = req.params.id;
  db.collection(articleCollection)
    .doc(userId)
    .get()
    .then((user) => {
      if (!user.exists) throw new Error("User not found");
      var userdata = user.data();
      res.render("pages/edituser", { userdata });
      // res.status(200).json({id:user.id, data:user.data()})
    })
    .catch((error) => res.status(500).send(error));
};

const deletearticle = async (req, res, next) => {
  console.log("ito the delete");
  const userId = req.params.id;
  await db.collection(articleCollection).doc(userId).delete();
  const userQureySnapshot = await db.collection(articleCollection).get();
  const users = [];
  userQureySnapshot.forEach((docs) => {
    users.push({
      id: docs.id,
      data: docs.data(),
    });
  });
  console.log("...>>>>", users);
  res.render("pages/index", { users });
};

const updatearticle = (req, res, next) => {};

module.exports = {  
  articlelist,
  articledetail,
  deletearticle,
  updatearticle,
  createarticle,
  renderCreateArticle
};

// module.export = new UserController();
// async function(req, res, next) {
//     console.log("into user route...");
//     try {
//       const userQureySnapshot = await db.collection(articleCollection).get();
//       const users = [];
//       userQureySnapshot.forEach((docs) => {
//         users.push({
//           id: doc.id,
//           data: doc.data(),
//         });
//       });
//       console.log("...>>>>" , users);
//       res.render('pages/index' , {users});
//       // res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
