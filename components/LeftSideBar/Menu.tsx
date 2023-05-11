import React, { FC, useContext } from "react";
import styles from "../../src/styles/Home.module.css";
import { AppContext } from "../Context/AppContext";
import { BsX } from "react-icons/bs";

type MenuLinks = {
  text: string;
  link: string;
  ariaOwns: string;
  onClick: () => void;
};

type MenuProps = {
  menuLinks: MenuLinks[];
};

const Menu: FC<MenuProps> = ({ menuLinks }) => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("Menu must be used within LayoutContext");
  }

  const { toggleLeftBar } = appContext;
  return (
    <div className={styles.menu}>
      <div className={styles.menuHeader}>
        MENU
        <BsX color="black" fontSize="25px" onClick={toggleLeftBar} />
      </div>
      <ul>
        {menuLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              aria-owns={item.ariaOwns}
              aria-haspopup="true"
              onClick={item.onClick}
            >
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
