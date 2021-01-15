import React from "react";
import { Layout } from "components";
import { useLocation } from "react-router-dom";
import styles from "./site.module.scss";

const Site = () => {
    const location = useLocation();
    const data = location.state
    console.log(data)
  return (
    <Layout>
      <div>
        <div className={styles.Info}>
          <div> </div>
          <div> </div>
        </div>
      </div>
    </Layout>
  );
};
export default Site;
