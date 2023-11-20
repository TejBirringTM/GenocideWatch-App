import { Axios } from "axios";

const client = new Axios({
    baseURL: "https://genocide-watch-api-c477a7f578c5.herokuapp.com/v1.0/",
    headers: {
        "client-key": "C6jKGCQYQ8gYIVaFg6pwDKQ8P"
    }
});

export default client;
