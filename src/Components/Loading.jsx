import React from 'react';
import { BiLoaderAlt } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <BiLoaderAlt className="text-2xl animate-spin" />
    </div>
  );
};

export default Loading;