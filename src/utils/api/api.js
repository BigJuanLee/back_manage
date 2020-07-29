import request from "@/utils/api/http";

let api = {};

//获取当天注册管理员数量
api.getManagerCount = date => {
    return request({
        url: `statis/admin/${date}/count`,
        method: "get",
        params: {
            date
        }
    })
}

//获取用户列表 limit数据数量 offset默认跳过条数
api.getUsersList = (limit, offset) => {
    return request({
        url: "v1/users/list",
        method: "get",
        params: {
            limit,
            offset
        }
    })
}

//获取所有用户注册量
api.getUserAll = () => {
    return request({
        url: "v1/users/count",
        method: "get"
    })
}

//获取城市列表 type: guess 定位城市 hot 热门 group 所有
api.getCity = type => {
    return request({
        url: "v1/cities",
        method: "get",
        params: {
            type
        }
    })
}

//获取商铺列表
api.getRestaurants = obj => {
    return request({
        url: "shopping/restaurants",
        method: "get",
        params: {
            longitude: obj.longitude,
            latitude: obj.latitude,
            offset: obj.offset,
            limit: obj.limit
        }
    })
}

//获取商铺数量
api.getRestaurantsCount = () => {
    return request({
        url: "shopping/restaurants/count",
        method: "get"
    })
}

export default api;