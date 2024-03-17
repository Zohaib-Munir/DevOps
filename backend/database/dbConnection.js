import mongoose from "mongoose";

export const dbConnection = () => {
  const database = "mongodb+srv://samiMirza:database1@database.jhvu6og.mongodb.net/MERN_EVENT";
  mongoose
    .connect(database)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to the database:", err);
    });
};
