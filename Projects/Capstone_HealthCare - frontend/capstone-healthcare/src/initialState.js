const initialState = {
  user: {
    token: null,
    isAdmin: false,
    loading: false,
  },
  medicines: {
    data: [],
    loading: false,
    loaded: false,
  },
};

export default initialState;
