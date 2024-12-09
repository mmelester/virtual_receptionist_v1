const db = require('../db'); // Import the db module
const validator = require("validator")
const connectDB = require('../db').connectDB;

let usersCollection;
// IIAFE to ensure connectDB is fully resolved before attempting to use the data
(async () => {
    try {
        const db = await connectDB();
        usersCollection = db.collection("users");
        console.log("usersCollection initialized"); // Debugging step
    } catch (error) {
        console.error("Error initializing usersCollection:", error);
    }
})();


let User = function(data) {
  this.data = data
  this.errors = []
}

User.prototype.cleanUp = function () {

  if (typeof(this.data.username) != "string") {this.data.username = ""}
  if (typeof(this.data.email) != "string") {this.data.email = ""}
  if (typeof(this.data.password) != "string") {this.data.password = ""}

  // get rid of any bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password
  }
}

User.prototype.validate = function() {
  if (this.data.username == "") {this.errors.push("You must provide a username.")}
  if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain letters and numbers.")}
  if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email address.")}
  if (this.data.password == "") {this.errors.push("You must provide a password.")}
  if (this.data.password.length > 0 && this.data.password.length < 8) {this.errors.push("Password must be at least 8 characters.")}
  if (this.data.password.length > 21) {this.errors.push("Password cannot exceed 21 characters.")}
  if (this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 characters.")}
  if (this.data.username.length > 12) {this.errors.push("Username cannot exceed 12 characters.")}
}

User.prototype.login = function() {
  return new Promise((resolve, reject) => {
      this.cleanUp()

      usersCollection.findOne({ username: this.data.username }).then((attemptedUser) => {
        
      if (attemptedUser && attemptedUser.password == this.data.password) {
        resolve("Congrats!")
      } else {
        reject("Invalid username / password.")
      }
    }).catch(function() {
      reject("Please try again later.")
    })
  })
}

module.exports = User
