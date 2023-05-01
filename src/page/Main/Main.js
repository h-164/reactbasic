import React from "react";
import { usePost } from "../../api/api";

const Main = () => {
  const id = 2;

  const { data } = usePost(id);

  console.log(data);

  return <div>adsfs</div>;
};

export default Main;
