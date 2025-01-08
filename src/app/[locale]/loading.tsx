import React from "react";
import { CSSProperties } from "react";

const Loading = () => {
  return (
    <>
      <div style={styles.loaderContainer}>
        <div style={styles.loader}></div>
        <p>Loading...</p>
      </div>
    </>
  );
};


const styles: { [key: string]: CSSProperties } = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  loader: {
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #3498db",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 2s linear infinite",
  },
};

export default Loading;
