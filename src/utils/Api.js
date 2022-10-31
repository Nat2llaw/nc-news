import axios from "axios";

const myApi = axios.create({
  baseURL: "https://natsnews.herokuapp.com/api",
});

export const fetchApiUsers = () => {
    return myApi.get(`/users`).then((res) => {
    const returnUsers = res.data;
    return returnUsers;
  });
};

export const fetchApiArticles = () => {
  return myApi.get(`/articles`).then((res) => {
    const returnArticles = res.data;
    return returnArticles;
  });
};

export const fetchApiArticlesByTopics = (searchtopic) => {
  return myApi.get(`/articles?topic=${searchtopic}`).then((res) => {
    const returnArticlesByTopic = res.data;
    return returnArticlesByTopic;
  });
};