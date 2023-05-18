import React, { useState, useEffect, useContext } from "react";

import { AppContext } from "../Context/AppContext";
import FriendStatus from "./FriendStatus";
import { friendsMockData } from "./friendsMockData";

const RightSideBar: React.FunctionComponent = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("Menu must be used within LayoutContext");
  }
  const { isRightBarOpen } = appContext;

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => setWindowWidth(window.innerWidth);

  const sidebarStyle: React.CSSProperties = {
    gridArea: "rightsidebar",
    backgroundColor:
      isRightBarOpen || windowWidth > 600 ? "#fff" : "transparent",
    width: isRightBarOpen || windowWidth > 600 ? "70px" : "0",
    height: "100%",
    position: "relative",
    transition: "0.3s",
    overflowX: "hidden",
    boxShadow: "0 0 34px 0 rgba(63, 66, 87, 0.1)",
    paddingTop: "50px",
  };

  return (
    <div style={sidebarStyle}>
      <div
        style={{
          display: "inline-block",
          textAlign: "center",
          width: "100%",
          position: "relative",
        }}
      >
        {isRightBarOpen || windowWidth > 600 ? (
          <ul
            style={{
              paddingLeft: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {friendsMockData.map((data) => (
              <FriendStatus key={data.id} friend={data} />
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default RightSideBar;
