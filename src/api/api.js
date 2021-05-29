import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7e3b7f89-a397-4c1a-b437-ccc6bc93ed76'
  }
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  authMe: () => {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      })
  },

  followUser: (userId) => {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      });
  },

  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      });
  }
};

// аналогично сделать follow, auth и другие запросы