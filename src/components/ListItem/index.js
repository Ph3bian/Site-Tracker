import React from "react";
import { ChevronRight } from "assets/svg";

import styles from "./list.module.scss";
const ListItem = ({ alt, data, history }) => {
  const { title = "", contacts = null, images = [], id, address = {} } = data;
  return (
    <div
      className={styles.ListItem}
      onClick={() => history.push(`sites/${id}`, data)}
    >
      <div className={styles.ListItemImage}>
        {images && images.length > 0 && (
          <img src={images && images[0]} alt={alt} />
        )}
      </div>
      <div className={styles.ListItemDescription}>
        <h2>{title}</h2>
        <p>{`${address.street}, ${address.city}, ${address.country} `}</p>
        <span>
          {contacts?.main?.firstName || ""} {contacts?.main?.lastName || ""}
        </span>
      </div>
      <div className={styles.ListItemArrow}>
        <ChevronRight />
      </div>
    </div>
  );
};

export default ListItem;
