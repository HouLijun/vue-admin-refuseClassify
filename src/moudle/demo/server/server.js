import {fetchGet,fetchPost} from "@/config/fetch.js"

export const fetchGetNews = params => { return fetchGet("NewsServlet", params).then(res => res); };
//https://www.cxwy.xyz/toutiao/NewsServlet?opt=getNewsByLabel&labelId=1&page=1&size=10
