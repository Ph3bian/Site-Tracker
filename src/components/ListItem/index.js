import React from "react";
import { ChevronRight } from "assets/svg";
import styles from "./list.module.scss";
const ListItem = ({ img, alt, data: { title = "", contacts = null } }) => {
  return (
    <div className={styles.ListItem} onClick={() => null}>
      <div className={styles.ListItemImage}>
        <img src={img} alt={alt} />
      </div>
      <div>
        <h2>{title}</h2>
        <p></p>
        <span>{contacts.main.firstName}</span>
      </div>
      <ChevronRight />
    </div>
  );
};

export default ListItem;
