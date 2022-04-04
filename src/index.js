import React, {useContext} from "react";
import ReactDOM from "react-dom";
import {CanvasContextProvider } from "./contexts/context";
import Canvas from "./pages/Canvas";
import Details from "./pages/Details";
import { CanvasContext } from "./contexts/context";

export default function App() {

  const { canvasState } = useContext(CanvasContext);

  return (
    <div>
      <div>
        <Canvas style={{  display: canvasState.current_page=="canvas" ? "block" : "none" }} />
        <Details style={{ display: canvasState.current_page=="details" ? "block" : "none" }} />
      </div>
    </div>
  );
}


ReactDOM.render(
  <CanvasContextProvider>
    <App />
  </CanvasContextProvider>,
document.getElementById('root')
);