const user = {
  state: {
    token: null,
  },
  reducers: {
    setToken(state, token) {
      return {...state, token};
    },
    clearToken(state) {
      return {...state, token: null};
    },
  },
};

export default user;
