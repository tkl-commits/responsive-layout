import React, { useState, useEffect, useContext } from "react";
import {
  BiGroup,
  BiMenu,
  BiSearchAlt2,
  BiChat,
  BiBell,
  BiHomeAlt2,
} from "react-icons/bi";
import { MdOutlineRssFeed } from "react-icons/md";
import { AppContext } from "../Context/AppContext";

const TopBar: React.FunctionComponent = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("Menu must be used within AppContext");
  }

  const { toggleLeftBar, toggleRightBar } = appContext;
  const [windowWidth, setWindowWidth] = useState(0);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => setWindowWidth(window.innerWidth);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <>
      <div
        style={{
          gridArea: "topbar",
          backgroundColor: "lightblue",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <div className="logo">
            <a title="" href="#">
              <img src="images/logo" alt="ZyearBook" />
            </a>
          </div>
          <input
            style={{
              background: "rgba(255,255,255,.1)",
              border: "none",
              fontSize: "13px",
              padding: "13px 30px",
              width: searchVisible ? "50%" : "0",
              height: "35px",
              color: "#fff",
              visibility: searchVisible ? "visible" : "hidden",
              transition: "width 0.5s",
              overflow: "hidden",
            }}
            type="text"
            placeholder="Search..."
          />
          <BiSearchAlt2
            style={{
              width: "30px",
              height: "30px",
            }}
            onClick={toggleSearch}
          />
        </div>
        {windowWidth < 600 ? (
          <>
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "8px",
                width: "80%",
              }}
            >
              <BiMenu
                style={{
                  width: "30px",
                  height: "30px",
                }}
                onClick={toggleLeftBar}
              />
              <BiHomeAlt2
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
              <MdOutlineRssFeed
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
              <BiChat
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
              <BiBell
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#fff",
                }}
              />
              <BiGroup
                style={{
                  width: "30px",
                  height: "30px",
                }}
                onClick={toggleRightBar}
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default TopBar;
