import React from "react";

const Content = () => {
  const handleNameChnage = () => {
    const names = ["bobs", "kelvin", "dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>hello {handleNameChnage()}</p>
    </main>
  );
};

export default Content;
