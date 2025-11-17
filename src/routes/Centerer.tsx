import React from "react";
import { Outlet } from "react-router";

const Centerer = () => {
  return (
    <React.Fragment>
      <div className="max-w-28/40 mx-auto bg-white min-h-screen">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Centerer;
