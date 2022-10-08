// install dotenv file to hide data

require("dotenv").config();

// console.log(process.env.sid);

// const sid = require(process.env.sid);
// const auth_token = require(process.env.auth_token);

const sid = "AC135321c48d6ca1d31e70cc766015697a";
const auth_token = "3e58fb1603eccb55ad51e1777b816ed7";

const twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+19852608339",
    to: "+919909076028",
    body: "Hello this is a test messege From Hitesh Prajpati",
  })
  .then((res) => console.log("message send"))
  .catch((err) => {
    console.log(err);
  });
