import axios from "axios";

const KEY = "AIzaSyCUQi8M2CxN87b_PbjaLn1GTSeMZAP3rIk";

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3/",
        params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        },
    }
);
