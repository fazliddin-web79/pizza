import React from "react";
import { useLocation, Outlet } from "react-router-dom";

export const Generic = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Coming soon {location.pathname} <Outlet />
    </div>
  );
};

export default Generic;
