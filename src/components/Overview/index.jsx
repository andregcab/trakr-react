import React from "react";
import { CURRENT_USER_SESSIONS } from "../../fakedata/data";
import SessionItem from "./SessionItem";

const Overview = () => {
  return (
    <div
      style={{
        margin: "50px auto",
        width: "75%",
        maxHeight: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {CURRENT_USER_SESSIONS.map((session) => (
        <SessionItem session={session} />
      ))}
    </div>
  );
};

export default Overview;
