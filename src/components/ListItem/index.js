import React from "react";
import { ChevronRight } from "assets/svg";
import styles from "./list.module.scss";
const ListItem = ({
  alt,
  data: { title = "", contacts = null, images = [] },
}) => {
  return (
    <div className={styles.ListItem} onClick={() => null}>
      <div className={styles.ListItemImage}>
        {images && images.length > 0 && (
          <img src={images && images[0]} alt={alt} />
        )}
      </div>
      <div className={styles.ListItemDescription}>
        <h2>{title}</h2>
        <p></p>
        <span>{contacts.main.firstName}</span>
      </div>
      <div className={styles.ListItemArrow}>
      <ChevronRight />
      </div>
    </div>
  );
};

export default ListItem;
