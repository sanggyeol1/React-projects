import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchSearchData = ({keyword, page}) => {
    console.log('keyword?' , keyword)
    return axios.get(`https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=10&pageNo=${page}&MobileOS=ETC&MobileApp=test&serviceKey=wdff5zLtmJSXWi1%2BIv6vC8Y9i5rmgujQ0biUyyyYBDmoiVbiCpTymAGt2bjN69YMztm%2FIJRZHhIIXDE4rv%2BOKg%3D%3D&_type=json&keyword=${keyword}`);
}

export const useSearchDataQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['search-data',{keyword, page}],
        queryFn:()=> fetchSearchData({keyword, page}),
        select:(result)=>result.data.response.body.items.item
    });
};