import axios from "axios";

export const fetchProfile = (username) =>
  axios.get(`http://localhost:5000/api/profile/${username}`);