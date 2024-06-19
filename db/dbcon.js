import mongoose from "mongoose";

export const dbcon = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName:"MERN_HOSPITAL",
    })
    .then(() => {
      console.log("CONNECTED TO DATABASE");
    })
    .catch((err) => {
      console.log(`SOME ERROR OCCURED WHILE CONNECTING TO DATABASE: ${err}`);
    });
};
