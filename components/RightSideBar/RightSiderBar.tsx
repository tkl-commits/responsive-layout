import React, { useState, useEffect } from "react";
import mockData from "./studyBuddyMockData.json";
import { RightSideBarProps } from "./RightSideBar.modal";

const RightSideBar: React.FunctionComponent<RightSideBarProps> = (props) => {
  const { isRightBarOpen } = props;
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
            {mockData.map((data) => (
              <li key={data.id}>
                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <img
                    style={{
                      height: "auto",
                      maxWidth: "100%",
                      borderRadius: "100%",
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                    }}
                    src={data.image}
                    alt=""
                  />
                  <span className="status f-online"></span>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default RightSideBar;
