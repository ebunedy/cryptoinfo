import React from "react";

const Loader = () => {
  return (
    <span className="flex h-20 w-20 relative m-auto">
      <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-primary-3 opacity-75"></span>
      <span className="absolute inline-flex top-7 left-2 text-primary-1 capitalize">loading..</span>
    </span>
  );
};

export default Loader;
