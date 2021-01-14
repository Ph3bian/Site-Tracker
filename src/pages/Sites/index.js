import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Layout, ListItem } from "components";
import { fetchSites } from "store/actions/sites";
import styles from "./sites.module.scss";

const Sites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSites());
  }, []);

  const { data, isLoading, hasError } = useSelector((state) => state.sites);
  console.log(data, ">>>>>");
  return (
    <Layout pageName={"Sites"}>
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          <div className={styles.Info}>
            <div> </div>
            <div>
              {data && data.map((site, id) => <ListItem key={id} data={site} />)}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Sites;
