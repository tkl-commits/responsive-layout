import React, { useState, useEffect, FunctionComponent } from "react";
import { BiUserCircle, BiGroup, BiMenu } from "react-icons/bi";
import { TopBarProps } from "./Topbar.modal";

const TopBar: React.FunctionComponent<TopBarProps> = (props) => {
  const { toggleLeftBar, toggleRightBar } = props;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => setWindowWidth(window.innerWidth);
  return (
    <>
      <div
        style={{
          gridArea: "topbar",
          backgroundColor: "lightblue",
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {windowWidth <= 600 && (
          <>
            <BiMenu
              style={{
                width: "30px",
                height: "30px",
              }}
              onClick={toggleLeftBar}
            />
          </>
        )}

        <div className="logo">
          {/* <a title="" href="#">
            <img src="images/logo" alt="ZyearBook" />
          </a> */}
        </div>
        <input
          style={{
            background: "rgba(255,255,255,.1)",
            border: "none",
            fontSize: "13px",
            padding: "13px 30px",
            width: "50%",
            color: "#fff",
            marginLeft: "5px",
          }}
          type="text"
          placeholder="Search..."
        />
        {windowWidth > 600 ? (
          <BiUserCircle
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        ) : undefined}

        {windowWidth <= 600 && (
          <>
            <BiGroup
              style={{
                width: "30px",
                height: "30px",
              }}
              onClick={toggleRightBar}
            />
          </>
        )}
      </div>
    </>
  );
};

export default TopBar;
