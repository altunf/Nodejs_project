import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "nodejs_app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to the DB successfuly");
    })
    .catch((err) => {
      console.log(`DB connection err: ${err}`);
    });
};

export default conn;
