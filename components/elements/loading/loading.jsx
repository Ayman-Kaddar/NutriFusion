import React from "react";

const Loading = () => {
  return (
    <div className="flex w-screen h-screen absolute justify-center items-center bg-white/50 gap-3 z-50">
      <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-white rounded-full animate-bounce "></div>
    </div>
  );
};

export default Loading;
