import React, { useState, useEffect, useContext } from "react";
import { BiBell, BiHomeAlt2, BiChat, BiCog } from "react-icons/bi";
import { MdOutlineRssFeed } from "react-icons/md";
import Menu from "./Menu";
import { AppContext } from "../Context/AppContext";

const LeftSideBar: React.FunctionComponent = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("Menu must be used within LayoutContext");
  }

  const { isLeftBarOpen, toggleLeftBar } = appContext;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => setWindowWidth(window.innerWidth);

  const sidebarStyle: React.CSSProperties = {
    gridArea: "leftsidebar",
    backgroundColor:
      isLeftBarOpen || windowWidth > 600 ? "#fff" : "transparent",
    width: windowWidth > 600 ? "70px" : isLeftBarOpen ? "50%" : "0",
    height: "100%",
    position: windowWidth > 600 ? "relative" : "fixed",
    transition: "0.3s",
    overflowX: "hidden",
    boxShadow: "0 0 34px 0 rgba(63, 66, 87, 0.1)",
    paddingTop: windowWidth > 600 ? "50px" : "25px",
    zIndex: "2",
  };

  const menuLinks = [
    {
      text: "Home Pages",
      link: "#mm-2",
      ariaOwns: "mm-2",
      onClick: () => console.log("Home Pages clicked"),
    },
    {
      text: "Feed",
      link: "#mm-2",
      ariaOwns: "mm-2",
      onClick: () => console.log("Feed clicked"),
    },
  ];

  return (
    <>
      <div style={sidebarStyle}>
        {windowWidth > 600 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BiHomeAlt2
              style={{
                color: "black",
                width: "30px",
                height: "30px",
                marginBottom: "30px",
              }}
            />
            <MdOutlineRssFeed
              style={{
                color: "black",
                width: "30px",
                height: "30px",
                marginBottom: "30px",
              }}
            />

            <BiBell
              style={{
                color: "black",
                width: "30px",
                height: "30px",
                marginBottom: "30px",
              }}
            />
            <BiChat
              style={{
                color: "black",
                width: "30px",
                height: "30px",
                marginBottom: "30px",
              }}
            />
            <BiCog
              style={{
                color: "black",
                width: "30px",
                height: "30px",
                marginBottom: "30px",
              }}
            />
          </div>
        ) : (
          <Menu menuLinks={menuLinks} />
        )}
      </div>
      {isLeftBarOpen && windowWidth < 600 ? (
        <div
          onClick={toggleLeftBar}
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            background: "#4C6370",
            opacity: "0.5",
            zIndex: "1",
          }}
        />
      ) : null}
    </>
  );
};

export default LeftSideBar;
