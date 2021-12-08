import axios from "axios";

export default axios.create({
    baseURL: "http://local.phplaravel.com:100/",
    headers: {
        "Content-type": "application/json"
    }
});