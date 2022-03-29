import { API_URL } from "../config";
import axios from "axios";

function findHomeImage() {
  return axios
    .get(`${API_URL}/api/image-accueils?populate=*`)
    .then((res) => res.data);
}
function findLogo() {
  return axios.get(`${API_URL}/api/logos?populate=*`).then((res) => res.data);
}
function findPhotographer() {
  return axios
    .get(`${API_URL}/api/photographers?populate=*`)
    .then((res) => res.data);
}

function findCategoryImage() {
  return fetch(`${API_URL}/api/categories?populate=*`, {
    method: "GET",
    headers: {
      Accept: "Application/json",
    },
  }).then((res) => res.json());
}

export default { findHomeImage, findLogo, findCategoryImage, findPhotographer };
