module.exports = {
  invalidCredentials: [
    {
      //Wrong Password
      email: "santiago.rodriguez@abstracta.com.uy",
      password: "123",
      assertionMessage: "Invalid password.",
    },
    {
      //Email that is not register yet
      email: "santiago.rodriguez+emailnotregistered@abstracta.com.uy",
      password: "test",
      assertionMessage: "Invalid password.",
    },
    /*{
      //Empty password and email
      email: "",
      password: "",
      assertionMessage: "An email address required.",
    },
    {
      //Empty email
      email: "",
      password: "test",
      assertionMessage: "An email address required.",
    },
    {
      //Empty password
      email: "santiago.rodriguez@abstracta.com.uy",
      password: "",
      assertionMessage: "Password is required.",
    },*/
  ],

  validCredentials: {
    email: "santiago.rodriguez@abstracta.com.uy",
    password: "TESTTEST",
  },
};