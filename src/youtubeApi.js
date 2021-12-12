import axios from "axios";

const KEY = 'AIzaSyCJppSaSh-JGIEOiZm108EB6pWmTtWLwRg'

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3",
        params: {
        part: "snippet",
        maxResults: 1,
        key: KEY,
        },
    }
);
