const express = require("express");
var admin = require("firebase-admin");
const uuid = require("uuid-v4");
const Multer = require('multer');
const db = admin.firestore();
const postCollection = "post";

const createPost = async (req, res, next) => {
  console.log('into the crete user');
  try {
    const post = req.body;     
    const newDoc = await db.collection(postCollection).add(post);    
    res.render("pages/post/add", {});
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

const renderCreatePost = (req, res, next)=>{
    console.log("into controler..")   
    try {
        // const postQureySnapshot = await db.collection(postCollection).get();
        // const posts = [];
        // postQureySnapshot.forEach((docs) => {
        //   posts.push({
        //     id: docs.id,
        //     data: docs.data(),
        //   });
        // });
        // res.render("pages/post/list", { posts });
        res.render("pages/post/add");        
      } catch (error) {
        console.log("ERRORR::", error);
        res.json(error);
      }
    // res.render("pages/post/list", { posts });
}

const postlist = async (req, res, next) => {
  try {
    const postQureySnapshot = await db.collection(postCollection).get();
    const posts = [];
    postQureySnapshot.forEach((docs) => {
      posts.push({
        id: docs.id,
        data: docs.data(),
      });
    });
    res.render("pages/post/list", { posts });
    // res.status(200).json(users);
  } catch (error) {
    console.log("ERRORR::", error);
    res.json(error);
  }
};

const postdetail = (req, res, next) => {
  const userId = req.params.id;
  db.collection(postCollection)
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

const deletepost = async (req, res, next) => {
  console.log("ito the delete");
  const userId = req.params.id;
  await db.collection(postCollection).doc(userId).delete();
  const postQureySnapshot = await db.collection(postCollection).get();
  const users = [];
  postQureySnapshot.forEach((docs) => {
    users.push({
      id: docs.id,
      data: docs.data(),
    });
  });
  console.log("...>>>>", users);
  res.render("pages/index", { users });
};

const updatepost = (req, res, next) => {};

module.exports = {  
  postlist,
  postdetail,
  deletepost,
  updatepost,
  createpost,
  renderCreatepost
};
