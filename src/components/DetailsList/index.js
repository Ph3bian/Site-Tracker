import React from "react";

import styles from "./detailsList.module.scss";
const ListItem = ({ icon, text, title }) => {
  return (
    <div className={styles.DetailsListItem}>
      <icon />
      <div className={styles.DetailsListItemDescription}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ListItem;
