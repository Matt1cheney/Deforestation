import React, { createContext, useReducer, useContext } from "react";

export const SET_CURRENT_EVENT = "SET_CURRENT_EVENT";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_CURRENT_EVENT:
        return {
          ...state,
          currentEvent: action.event,
          loading: false,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    events: [],
    currentEvent: {
      _id: 0,
      title: "",
      body: "",
      author: "",
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
