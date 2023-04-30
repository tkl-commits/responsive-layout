import React, { FC } from "react";
import styles from "../../src/styles/Home.module.css";

type MenuItem = {
  text: string;
  link: string;
  ariaOwns: string;
  onClick: () => void;
};

type MenuProps = {
  menuItems: MenuItem[];
};

const Menu: FC<MenuProps> = ({ menuItems }) => (
  <div className={styles.menu}>
    <div>
      <a>Menu</a>
    </div>
    <ul>
      {menuItems.map((item, index) => (
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

export default Menu;
