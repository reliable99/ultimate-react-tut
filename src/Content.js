import React from "react";

const Content = () => {
  const handleNameChnage = () => {
    const names = ["bobs", "kelvin", "dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>hello {handleNameChnage()}</p>
      <button onClick={handleClick}>click it</button>
      <button onClick={() => handleClick2("Dele")}>click it</button>
      <button onClick={(e) => handleClick3(e)}>click it</button>
    </main>
  );
};

export default Content;
