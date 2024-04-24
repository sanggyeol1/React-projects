import axios from 'axios';

const API_KEY = 'wdff5zLtmJSXWi1%2BIv6vC8Y9i5rmgujQ0biUyyyYBDmoiVbiCpTymAGt2bjN69YMztm%2FIJRZHhIIXDE4rv%2BOKg%3D%3D';

const api = axios.create({
    baseURL: 'https://apis.data.go.kr/B551011/GoCamping',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});



export default api;