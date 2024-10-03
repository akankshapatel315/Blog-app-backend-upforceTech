const db = require("mongoose");
const bcryptPwd = require("bcrypt");

var userSchema = new db.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserModel = db.model("User", userSchema);

module.exports = UserModel;


UserModel.exists({
  "email": `akankshapatel315@gmail.com`,
}).then(async (data:any) => {
  if (!data) {
    await UserModel.create({
      firstName: "Super",
      lastName: "Admin",
      email: `akankshapatel315@gmail.com`,
      password: await  bcryptPwd.hashSync("Super@1234", bcryptPwd.genSaltSync(10)),
     
    })
      .then((data:any) => {
        console.log("default user created user successfully");
      })
      .catch((err:any) => {
        console.log(err);
      });
  }

});

