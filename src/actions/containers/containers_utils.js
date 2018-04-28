import axios from 'axios';

const url = "http://127.0.0.1:8000/containers"; 

export const fetchContainers = () => (
  axios.get(url)
    .then(resp => resp)
);