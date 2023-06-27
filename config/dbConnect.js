const { default: mongoose } = require("mongoose");
const { dbUrl } = require("./config");

const dbConnect = () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = mongoose.connect(dbUrl);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
