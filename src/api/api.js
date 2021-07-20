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
  },

  getProfile: (userId) => {
    console.warn('Obsolete method. Use profileAPI object.');
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      });
  },

  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus: (status) => {
    return instance.put(`profile/status`, { status: status });
  }
};

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`);
  },

  login: (email, password, rememberMe = false) => {
    return instance.post(`/auth/login`, {
      email,
      password,
      rememberMe
    });
  },

  logout: () => {
    return instance.delete(`auth/login`);
  }
};
