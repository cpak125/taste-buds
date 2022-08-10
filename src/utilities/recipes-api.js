import sendRequest from "./send-request";

const BASE_URL = '/api/recipes/saved';

export function getAll() {
  return sendRequest(BASE_URL);
};