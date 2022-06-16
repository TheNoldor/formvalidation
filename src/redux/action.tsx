import { useDispatch } from "react-redux";

export function HandleNext() {
  const dispatch = useDispatch();
  return dispatch({ type: "NEXT_STEP" });
}

export const HandleBack = () => {
  const dispatch = useDispatch();
  return dispatch({ type: "BACK_STEP" });
};

export const HandleReset = () => {
  const dispatch = useDispatch();
  return dispatch({ type: "RESET_STEP" });
};
