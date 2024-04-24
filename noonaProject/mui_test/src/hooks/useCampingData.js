import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import axios from "axios";


const fetchCampingData = () => {
    return axios.get('https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=test&serviceKey=wdff5zLtmJSXWi1%2BIv6vC8Y9i5rmgujQ0biUyyyYBDmoiVbiCpTymAGt2bjN69YMztm%2FIJRZHhIIXDE4rv%2BOKg%3D%3D&_type=json');
}

export const useCampingDataQuery = () => {
    return useQuery({
        queryKey: ['camping-data'],
        queryFn: fetchCampingData,
        select:(result)=>result.data.response.body.items.item
    });
};