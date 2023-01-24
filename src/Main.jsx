import React from "react";
import Centre from "./Centre";
import Phone from "./Phone";
import { useState } from "react";

const Main = () => {
  const [state, setstate] = useState();

  return (
    <div
      style={{
        height: "90vh",
        width: "100vw",
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "30px",
          backgroundColor: "gray",
          width: "80%",
          height: "95%",
        }}
      >
        <div style={{ display: "flex" }}>
          <Centre state={state} />

          <Phone setstate={setstate} />
        </div>
      </div>
    </div>
  );
};

export default Main;
