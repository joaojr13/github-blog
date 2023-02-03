import axios from "axios";

export const apiGithub = axios.create({
  baseURL: 'https://api.github.com',
});

export const apiGitFavorite = axios.create({
  baseURL: 'https://gitfavorites.azurewebsites.net'
});