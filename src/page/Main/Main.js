import React, { useState } from "react";
import { getPostById } from "../../api/api";
import { useMutation } from "react-query";

const Main = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(getPostById, {
    onSuccess: (data) => {
      console.log("success", data);
    },
  });

  const handleSubmit = () => {
    loginMutation.mutate({ loginId: id, password });
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
};

export default Main;
