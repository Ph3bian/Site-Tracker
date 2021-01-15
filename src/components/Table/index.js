import React, { useState } from "react";
import styles from "./table.module.scss";
import randomstring from "randomstring";
import TableLoader from "components/Loader/TableLoader";
const Table = ({
  data,
  title,
  schema,
  hasHeader,
  isLoading,
  handleSearch,
  value,
  inputPlaceholder,

  statusOptions,

}) => {


  const handleRenderRow = (rowData) => {
    return (
      <tr key={randomstring.generate(5)}>
        {schema.map(({ accessor, render, name }, index) => {
          if (render) {
            return (
              <td key={`${accessor}-${index}`}>
                {render(rowData) ? render(rowData) : "N/A"}
              </td>
            );
          }
          return (
            <td key={`${accessor}-${index}`}>
              {rowData && rowData[accessor] ? rowData[accessor] : "---"}
            </td>
          );
        })}
      </tr>
    );
  };
  if (isLoading) {
    return <TableLoader />;
  }
  return (
    <section className={styles.Table}>
      {hasHeader && (
        <header className={styles.Table__header}>
          {title}
          <div className={styles.filter}></div>
        </header>
      )}

      <div className={styles.Table__wrapper}>
        <table className={styles.Table__content}>
          <thead>
            <tr>
              {data &&
                data.length > 0 &&
                !isLoading &&
                schema.map(({ name }, index) => (
                  <th key={`${name}-${index}`}>{name}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {isLoading && data && data.length <= 0 && "Loading..."}
            {isLoading && data && data.length > 0 && (
              <>
                {data.map((row) => {
                  return handleRenderRow(row);
                })}
              </>
            )}
            {!isLoading && data && data.length > 0 && (
              <>
                {data.map((row) => {
                  return handleRenderRow(row);
                })}
              </>
            )}
          </tbody>
        </table>

        {!isLoading && data && data.length === 0 && (
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Card
              backgroundColor="white"
              elevation={0}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>There is no data to be displayed here at this time.</Text>
            </Card>
          </Pane>
        )}
        {!isLoading && !data && (
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Card
              backgroundColor="white"
              elevation={0}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>There is no data to be displayed here at this time.</Text>
            </Card>
          </Pane>
        )}
      </div>
    </section>
  );
};

export default Table;
