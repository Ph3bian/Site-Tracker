import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './loader.module.scss';
const TableLoader = () => {
  const data =[]
  return (
    <div className={styles.ListLoader}>
      <div className={styles.img}>
        <ContentLoader
          width={1100}
          height={50}
          speed={1}
          backgroundColor="#f8f9fa"
          foregroundColor="#f6f7f9"
        >
          <rect x="0" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="130" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="250" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="370" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="490" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="610" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="730" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="850" y="25" rx="2" ry="2" width="110" height="9" />
          <rect x="970" y="25" rx="2" ry="2" width="110" height="9" />
        </ContentLoader>
      </div>
      <div className={styles.text}>
        {data.map((id, index) => (
          <ContentLoader
            width={1100}
            height={50}
            speed={1}
            key={index}
            backgroundColor="#f8f9fa"
            foregroundColor="#f6f7f9"
          >
            <rect x="0" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="130" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="250" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="370" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="490" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="610" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="730" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="850" y="25" rx="2" ry="2" width="110" height="9" />
            <rect x="970" y="25" rx="2" ry="2" width="110" height="9" />
          </ContentLoader>
        ))}
      </div>
    </div>
  );
};
export default TableLoader;
