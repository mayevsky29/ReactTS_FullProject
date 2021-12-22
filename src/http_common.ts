import axios from "axios";

export default axios.create({
   // baseURL: "http://local.phplaravel.com:100/",
   baseURL: "https://localhost:44341/Product",
    headers: {
        "Content-type": "application/json"
    }
});