import React, { useState } from "react";

const Main = () => {
  const [variant, setVariant] = useState("");

  const changeText = (event) => {
    setVariant(event.target.value);
  };
  return (
    <div>
      <input type="text" value={variant} onChange={changeText} />
      <input type="text" value={variant} onChange={changeText} />
    </div>
  );
};

export default Main;
