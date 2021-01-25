const INITIAL_STATE = {
  openAlert: false,
  message: "Something went wrong!",
  severty: "error",
};

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_ALERT":
      return {
        ...state,
        openAlert: true,
        message: payload.message,
        severty: payload.severty,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        openAlert: false,
      };
    default:
      return state;
  }
};

export default alertReducer;
