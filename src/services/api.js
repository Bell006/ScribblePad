import axios from "axios";

export const api = axios.create({
    baseURL: "https://scribblepad-api.onrender.com",
})