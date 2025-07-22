import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:5050",
	timeout: 10000, // Set a timeout of 10 seconds
});

export default axiosInstance;
