import React from "react";
import { MenuIcon, AppsIcon } from "assets/svg";
import styles from "./layout.module.scss";

const Layout = ({ pageName, children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.LayoutHeader}>
        <div className={styles.LayoutHeaderMenu}>
          <MenuIcon />
        </div>
        <div>Scheduling</div>
        <div className={styles.LayoutHeaderProfile}>
          <AppsIcon />
        </div>
      </div>
      {pageName && <div className={styles.LayoutSubHeader}>{pageName}</div>}
      <div className={styles.LayoutChildren}>{children}</div>
    </div>
  );
};
export default Layout;
