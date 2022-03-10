import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nb-news.herokuapp.com/api",
});

export const getArticles = async (sortBy, order, topic) => {
  const {
    data: { articles },
  } = await newsApi.get(`/articles`, {
    params: { sort_by: sortBy, order: order, topic: topic },
  });
  return articles;
};

export const getTopics = async () => {
  const {
    data: { topics },
  } = await newsApi.get("/topics");
  return topics;
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

export const patchVotesOnArticleByArticleId = async (articleId, inc_votes) => {
  const {
    data: { article },
  } = await newsApi.patch(`/articles/${articleId}`, { inc_votes });
  return article;
};

export const postCommentByArticleId = async (articleId, username, body) => {
  const {
    data: { comment },
  } = await newsApi.post(`articles/${articleId}/comments`, { username, body });
  return comment;
};
