import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ListItem, ListItemLoader, Table } from "components";
import { fetchSites } from "store/actions/sites";
import styles from "./sites.module.scss";

const Sites = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSites());
  }, []);

  const { data, isLoading, hasError } = useSelector((state) => state.sites);

  return (
    <div>
      <div className="SubHeader">Sites</div>
      {isLoading ? (
        <ListItemLoader />
      ) : (
        <div>
          <div className={styles.Info}>
            <div> </div>
            <div>
              {data &&
                data.map((site, id) => (
                  <ListItem key={id} data={site} history={history} />
                ))}
            </div>
            {/* <div>
              <Table data={data}/>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sites;
