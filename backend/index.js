// Authentication  : verify who they claim they are

// Authorization : do the user have the right permission to perfom an operation ?

// Permission : do I have the correct priviliges to perfom certain operations such as deleting a ressource

// Commercial solutions :

// Amplify by Amazon - Firebase by Google - Auth0

//     /api/users : créer un utilisateur
//    /api/auth :   s'identifier

// token : longue string, crypté, signé digitalement

const express = require("express");

const connect = require("./db/connect");
const users = require("./routes/users");
const auth = require("./routes/auth");

connect();

const app = express();
app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);

app.get("/ok", (req, res) => {
  res.send("ok");
});

app.listen(9000);
