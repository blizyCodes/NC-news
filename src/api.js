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

export const getTopics = async () => {
  const {
    data: { topics },
  } = await newsApi.get("/topics");
  return topics;
};

export const getArticlesByTopic = async (topic) => {
  const {
    data: { articles },
  } = await newsApi.get(`/articles?topic=${topic}`);
  return articles;
};

export const getArticleById = async (articleId) => {
  const {
    data: { article },
  } = await newsApi.get(`/articles/${articleId}`);
  return article;
};

export const getCommentsByArticleId = async (articleId) => {
  const {
    data: { comments },
  } = await newsApi.get(`/articles/${articleId}/comments`);
  return comments;
};
