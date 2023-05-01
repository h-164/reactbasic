import axios from "axios";

export const getPostById = async (params) => {
  const { data } = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${params.userId}`,
    params
  );
  return data;
};
