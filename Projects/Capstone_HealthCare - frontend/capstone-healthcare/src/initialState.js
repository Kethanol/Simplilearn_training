const initialState = {
  user: {
    isAdmin: false,
    loading: false,
    id: 0,
  },
  medicines: {
    data: [],
    loading: false,
    loaded: false,
  },
  cart: {
    id: 0,
    medicines: [],
    loading: false,
    loaded: false,
  },
};

export default initialState;
