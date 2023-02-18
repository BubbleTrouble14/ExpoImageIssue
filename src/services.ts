// showLastCommitMessageForThisLibrary.js
import axios from 'axios';

type RequestBody<T> = {
  url: string;
  parameters?: T;
};

const api = axios.create({
  baseURL: 'https://api.mintgarden.io/',
  timeout: 1000,
});

const urlFromObj = (obj: {}): string => {
  return Object.entries(obj)
    .map(([key, val]): string => {
      return key + '=' + val;
    })
    .join('&');
};

async function fetchData<T, Response>(requestBody: RequestBody<T>) {
  let url = requestBody.url;
  if (requestBody.parameters) {
    url = url + '?' + urlFromObj(requestBody.parameters);
  }
  try {
    const response = await api.get<Response>(url);
    if (response.data) {
      return response.data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Caught Cancel');
    } else {
      throw error;
    }
  }
}

export {fetchData, urlFromObj};
