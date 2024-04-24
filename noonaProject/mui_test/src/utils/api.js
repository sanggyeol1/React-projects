import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: 'https://apis.data.go.kr/B551011/GoCamping',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});



export default api;