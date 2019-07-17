import {fetchGet,fetchPost} from "@/config/fetch.js"

export const fetchGetCateList = params => { return fetchGet("CategoryServlet", params).then(res => res); };

//https://www.cxwy.xyz/refuse/GarbageServlet?opt=insertGarbage&name=果皮&keys=香蕉皮,瓜子皮,西瓜皮,苹果皮,橘子皮,荔枝壳&hot=0&cateId=3&reco=这些东西再干也是湿垃圾~