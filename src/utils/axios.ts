import axios from "axios";

export const baseURL = window.location.origin == "http://localhost:3000" ? "http://127.0.0.1:8000/" : "http://localhost:3000";


const api = axios.create({
    baseURL: baseURL,
})

export default api