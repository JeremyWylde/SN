import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": 'cf1841cd-6d1a-4d5e-ab77-95df9a8ef2a0'
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data
            })
    },
    follow(id){
        return instance.post(`follow/${id}`)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId){
        console.log('Please use profileAPI');
        return profileApi.getProfile(userId)
    }
};

export const profileApi = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status});
    }
};

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
};




