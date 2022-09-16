import axios from "axios";

const client = axios.create({
  baseURL: "https://khojapp.herokuapp.com/api/v1",
});

export default client;
