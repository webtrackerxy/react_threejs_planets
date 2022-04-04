import React, {useContext,Fragment} from "react";
import { CanvasContext } from "../contexts/context";

import DetailsPage from "./DetailsPage";

const Details = (props) => {

  const { canvasState, setCanvasState } = useContext(CanvasContext);

  const onClick = () => {
    console.log("Back")
      setCanvasState({
        ...canvasState,
        current_page : "canvas"
      });
  }


  return (
    <div style={props.style}>
    <input type="submit" value="Back" onClick={onClick} />
    <div className="details"> Planet selected: {JSON.stringify(canvasState.selected_object.object?.name)}
    <DetailsPage name={canvasState.selected_object.object?.name}/>
    </div>
    </div>
  )

};

export default Details;