import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nb-news.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};
