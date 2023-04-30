import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineRssFeed } from "react-icons/md";
import { LeftSideBarProps } from "./LeftSideBar.modal";
import Menu from "./Menu";

const LeftSideBar: React.FunctionComponent<LeftSideBarProps> = (props) => {
  const { isLeftBarOpen } = props;
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
    paddingTop: "50px",
  };

  const menuItems = [
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
    <div style={sidebarStyle}>
      {windowWidth > 600 ? (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiMenu
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

          <li style={{ marginBottom: "30px" }}>Link 3</li>
          <li style={{ marginBottom: "30px" }}>Link 4</li>
          <li style={{ marginBottom: "30px" }}>Link 5</li>
        </ul>
      ) : (
        <Menu menuItems={menuItems} />
      )}
    </div>
  );
};

export default LeftSideBar;
