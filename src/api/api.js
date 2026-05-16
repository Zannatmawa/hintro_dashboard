// src/api/api.js
import axios from "axios";

const api = axios.create({
    baseURL: "https://mock-backend-hintro.vercel.app",
});

export default api;

export const getDashboard = async (userId) => {
    const res = await api.get("/api/auth/dashboard", {
        headers: {
            "x-user-id": userId,
        },
    });

    return res.data;
};