import React, { useState } from "react";

const initState = {
  selected_object: {},
  current_page: "canvas",
  view: "3D"
};

const CanvasContext = React.createContext({});

const CanvasContextProvider = ({ children }) => {
  const [canvasState, setState] = useState(initState);

  const setCanvasState = (state) => {
    setState(state);
  };

  return (
    <CanvasContext.Provider
      value={{
        canvasState,
        setCanvasState
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export { CanvasContext, CanvasContextProvider };
