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

export const fetchApiTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    const returnTopics = res.data;
    return returnTopics;
  });
};

export const fetchApiArticlesByTopics = (searchtopic) => {
  return myApi.get(`/articles?topic=${searchtopic}`).then((res) => {
    const returnArticlesByTopic = res.data;
    return returnArticlesByTopic;
  });
};

export const fetchApiArticleId = (id) => {
  return myApi.get(`/articles/${id}`).then((res) => {
    const returnTopics = res.data;
    return returnTopics;
  });
};

export const changeApiArticleVotes = (id, vote) => {
  console.log(id, vote, "api here")
  return myApi.patch(`/articles/${id}`, {inc_votes: vote}).then((res) => {
    const returnNewVote = res.data;
    return returnNewVote;
  })
}