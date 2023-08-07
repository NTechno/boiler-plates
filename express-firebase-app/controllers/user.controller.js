const express = require("express");
const path = require("path");
const multer = require("multer");
const uuid = require("uuid-v4");
const nodemailer = require("nodemailer");
var admin = require("firebase-admin");
var { Storage } = require("@google-cloud/storage");
const serviceAccount = require("../serviceAccountKey.json");
const db = admin.firestore();
var bucket = require("../firebase.app");

const userCollection = "users";
var storageLocal = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    console.log("file destination", file);
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;

const login = (req, res) => {
  res.render("pages/login");
};

const signup = (req, res, next) => {
  res.render("pages/register");
};

const uploadFileToGalary = (req, res, next) => {
  res.render("pages/fileUpload");
};

const uploadToDir = multer({
  storage: storageLocal,
}).single("filetoupload");

const uploadFileToShow = async (req, res, next) => {
  console.log("file 1231200.....", req.body);

  const storage = new Storage({
    keyFilename: serviceAccount,
  });

  let bucketName = "UserImages";
  let filename = req.body.profilepic;
  await storage.bucket(bucketName).upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: "public, max-age=31536000",
    },
  });

  uploadToDir(req, res, function (err) {
    console.log("upload file......");
    if (err) {
      res.send(err);
    } else {
      res.render("pages/fileUpload");
    }
  });
};

const sendMail = async (req, res, next) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smt.gmail.com",
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass,
    },
  });
  let info = await transporter.sendMail({
    from: '"Nidhi Gadhvi 👻" <gadhavi019@gmail.com>', // sender address
    to: "gadhavi019@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

const createuser = async (req, res, next) => {
  try {
    const user = req.body;
    console.log("create user..." , user);    
    // if (!user.profilepic) {
    //   res.status(400).send("Error: No files found");
    // } else {
    // uploadFileToShow(req, res, next).then(async (data) => {
    //   console.log("into the upload file to show!!!", data);
    //   const newDoc = await db.collection(userCollection).add(user);
    // });

    // const mailData = {
    //   from: "nidhi.baliya019@gmail.com",
    //   to: "nidhi.gadhavi@technostacks.com",
    //   subject: "test mail",
    //   html: "<h2>Welcome To The World...</h2>",
    // };

    // sendMail().catch(console.error);

    // transporter.sendMail(mailData, function (err, info) {
    //   if(err){
    //     console.log(err)
    //   }else{
    //     console.log(info)
    //   }
    // })
    admin.auth()
      .createUser(user)
      .then(async(usercredentials) => {
        console.log("authentication created..", usercredentials);
        console.log("user auth created......", usercredentials);
        // res.status(201).send(`Created a new user: ${newDoc.id}`);
        // res.render("pages/register");
        // const userC = await admin.auth().createUser(user);
        console.log("user auth created......", usercredentials);
        res.status(201).send(`Created a new user: ${usercredentials}`);
        res.render("pages/register");
      })
      .catch((error) => {
        console.log("error :" , error);
      });
   
    // const blob = bucket.file("profile");
    // const blobWriter = blob.createWriteStream({
    //   metadata: {
    //     contentType: user.profilepic.mimetype,
    //   },
    // });
    // blobWriter.on("error", (err) => {
    //   console.log(err);
    // });
    // blobWriter.on("finish", async() => {
    //   console.log("file uploaded..");
    //   console.log("file uploaded..");
    //   const newDoc = await db.collection(userCollection).add(user);
    //   const user = await admin.auth().createUser(user);
    //   console.log("user auth created......" , user);
    //   // res.status(201).send(`Created a new user: ${newDoc.id}`);
    //   res.render("pages/register");
    //   // res.status(200).send("File uploaded.");
    // });
    // }

    // uploadFile(user.profilepic).then(async () => {
    //   const newDoc = await db.collection(userCollection).add(user);
    //   res.status(201).send(`Created a new user: ${newDoc.id}`);
    //   res.render("pages/register", {});
    // });
  } catch (error) {
    console.log("error", error);
    res
      .status(400)
      .send(
        `User should cointain firstName, lastName, email, areaNumber, department, id and contactNumber!!!`
      );
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

const userlist = async (req, res, next) => {
  try {
    const userQureySnapshot = await db.collection(userCollection).get();
    const users = [];
    userQureySnapshot.forEach((docs) => {
      users.push({
        id: docs.id,
        data: docs.data(),
      });
    });
    // res.render("pages/index", { users });
    res.status(200).json(users);
  } catch (error) {
    console.log("ERRORR::", error);
    res.json(error);
  }
};

const userdetail = (req, res, next) => {
  const userId = req.params.id;
  db.collection(userCollection)
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

const deleteuser = async (req, res, next) => {
  console.log("ito the delete");
  const userId = req.params.id;
  await db.collection(userCollection).doc(userId).delete();
  const userQureySnapshot = await db.collection(userCollection).get();
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

const updateuser = (req, res, next) => {};

module.exports = {
  login,
  signup,
  userlist,
  userdetail,
  deleteuser,
  updateuser,
  createuser,
  uploadFileToGalary,
  uploadFileToShow,
};
// module.export = new UserController();
// async function(req, res, next) {
//     console.log("into user route...");
//     try {
//       const userQureySnapshot = await db.collection(userCollection).get();
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
