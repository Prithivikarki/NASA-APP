import React from "react";

const Sidebar = (props) => {
  let { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i
            onClick={handleToggleModal}
            className="fa-solid fa-arrow-right"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
