import env from "dotenv";
import { connect } from "mongoose";

// const url: string =
//   " mongodb+srv://ibrahimpopoola292:<ibrahimpopoola292>@ibrahim.iecum.mongodb.net/?retryWrites=true&w=majority&appName=ibrahim";
export const dbConfig = async () => {
  try {
    await connect(process.env.MONGO_LIVE_URL as string).then(() => {
      console.clear();
      console.log("server connected..😜✌✌💖");
    });
  } catch (error) {
    console.log(error);
  }
};
