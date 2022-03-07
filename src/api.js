import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nb-news.herokuapp.com/api",
});

export const getArticles = async () => {
  const {
    data: { articles },
  } = await newsApi.get("/articles");
  return articles;
};
