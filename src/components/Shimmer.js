import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="w-64 h-64 m-2 p-2 bg-gray-300" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
