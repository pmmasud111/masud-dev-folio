import React from "react";
import CircularWithValueLabel from "./components/loading/Loading";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircularWithValueLabel />
    </div>
  );
};

export default loading;
