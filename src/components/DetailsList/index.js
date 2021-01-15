import React from "react";
import styles from "./detailsList.module.scss";
const ListItem = ({ icon, text, title }) => {
  return (
    <div className={styles.DetailsListItem}>
      {icon && <icon />}
      <div className={styles.DetailsListItemDescription}>
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default ListItem;
