import React from "react";

const Main = (props) => {
  let { data } = props;
  return (
    <div className="imgContainer">
      <img
        className="bgImage"
        src={data.hdurl}
        alt={data.title || "bg-img"}
      ></img>
    </div>
  );
};

export default Main;
