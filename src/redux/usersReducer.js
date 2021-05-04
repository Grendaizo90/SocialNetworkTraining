const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
  
const initialState = {
  users: [
    {
      id: 2,
      photoUrl: 'https://cs6.pikabu.ru/avatars/130/v130979.jpg',
      followed: true,
      fullName: 'Grisha',
      status: 'sr',
      location: { city: 'Kiev', country: 'Ukraine' }
    },
    {
      id: 3,
      photoUrl: 'https://cs6.pikabu.ru/avatars/130/v130979.jpg',
      followed: true,
      fullName: 'Taisha',
      status: 'md',
      location: { city: 'Los Angeles', country: 'USA' }
    },
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
