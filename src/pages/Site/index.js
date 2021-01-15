import React from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft } from "assets/svg";
import { DetailsList } from "components";
import styles from "./site.module.scss";

const Site = () => {
  const location = useLocation();
  const {
    state: { address, contacts, title, images },
  } = location;
  return (
    <div className={styles.Site}>
      <div className={["SubHeader", styles.SiteHeader].join(" ")}>
        <ChevronLeft />
        <div className={styles.SiteHeaderContent}>
          <img src={images[0]} alt="avatar" />
          <div className={styles.SiteHeaderDescription}>
            <h2>{title}</h2>
            <p>{`${address.street}, ${address.city}, ${address.country} `}</p>
            <span>
              {contacts?.main?.firstName || ""} {contacts?.main?.lastName || ""}
            </span>
          </div>
        </div>

        <div className={styles.Info}>
          <div> </div>
          <div>
            <DetailsList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Site;
