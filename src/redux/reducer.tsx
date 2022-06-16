const defaultState = {
  activeStep: 0,
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };

    case "BACK_STEP":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "RESET_STEP":
      return {
        ...state,
        activeStep: state.activeStep * 0,
      };
    default:
      return state;
  }
};

export default reducer;
