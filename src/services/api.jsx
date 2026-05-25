import axios from "axios";

const API = axios.create({
  baseURL: "https://nidhisinghmackupacademy.com/wp-json/wp/v2",
});

export const getPosts = async () => {
  const response = await API.get("/posts?_embed");
  return response.data;
};

export const getSinglePost = async (slug) => {
  const response = await API.get(
    `/posts?slug=${slug}&_embed`
  );

  return response.data[0];
};

export default API;