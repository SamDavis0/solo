import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// const KEY = process.env.REACT_APP_KEY;
const KEY = 'AIzaSyCUQi8M2CxN87b_PbjaLn1GTSeMZAP3rIk'

console.log(KEY)

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
    q: 'one'
  }
});
