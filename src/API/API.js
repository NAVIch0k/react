import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "bc2cc888-50d8-408c-a0fb-0fb9ec86d2d7" }
})
export const Users_API = {
    get_users(current_page = 1, page_size = 10) {
        return instance.get(`users?page=${current_page}&count=${page_size}`).then(response => response.data)
    }
}
export const Profile_API = {
    profile_info(user_id) {
        return instance.get(`profile/` + user_id).then(Response => Response.data)
    }
}

export const header_info = () => {
    return instance.get(`auth/me`)
}
export const Subscribe_API = {
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(Response => Response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(Response => Response.data)
    }
}