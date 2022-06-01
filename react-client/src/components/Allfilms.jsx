import React from "react";
import Onefilm from "./Onefilm.jsx";

const Allfilms = (props) => {
  console.log(props);
  console.log(props.adminState, "aezeazeaze");
  return (
    <div className="film-container">
      {/* <h1>hello</h1> */}
      {props.Films.map((element, index) => {
        return (
          <Onefilm
            film={element}
            key={index}
            adminState={props.adminState}
          ></Onefilm>
        );
      })}
    </div>
  );
};

export default Allfilms;
