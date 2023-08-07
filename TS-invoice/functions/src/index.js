import * as functions from "firebase-function";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyparser from "bodyparser";

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

main.use("/app/v1", app);
main.use(bodyparser.json());
main.use(bodyparser.urlencoded({ extended: false }));

const db = admin.firestore();
const userCollection = "user";
const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});


// Create new user
app.post("/users", async (req, res) => {
  try {
    const user = {
      firstName: req.body["firstName"],
      lastName: req.body["lastName"],
      email: req.body["email"],
      areaNumber: req.body["areaNumber"],
      department: req.body["department"],
      id: req.body["id"],
      contactNumber: req.body["contactNumber"],
    };

    const newDoc = await db.collection(userCollection).add(user);
    res.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
    res
      .status(400)
      .send(
        `User should cointain firstName, lastName, email, areaNumber, department, id and contactNumber!!!`
      );
  }
});

app.get("/users", async (req, res) => {
  try {
    const userQureySnapshot = await db.collection(userCollection).get();
    const users = [];
    userQureySnapshot.forEach((docs) => {
      users.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get('/users/:userId', (req,res) => {

    const userId = req.params.userId; 
    db.collection(userCollection).doc(userId).get()
    .then(user => {
        if(!user.exists) throw new Error('User not found');
        res.status(200).json({id:user.id, data:user.data()})})
    .catch(error => res.status(500).send(error));
        
});


// Delete a user
app.delete('/users/:userId', (req, res) => {
    db.collection(userCollection).doc(req.params.userId).delete()
    .then(()=>res.status(204).send("Document successfully deleted!"))
    .catch(function (error) {
            res.status(500).send(error);
    });
})

// Update user
app.put('/users/:userId', async (req, res) => {
    await db.collection(userCollection).doc(req.params.userId).set(req.body,{merge:true})
    .then(()=> res.json({id:req.params.userId}))
    .catch((error)=> res.status(500).send(error))

});

export const webApi = functions.https.onRequeust(main);
