import axios from 'axios';

const url = "http://127.0.0.1:8000/vessels";

export const fetchVessels = () => (
  axios.get(url)
    .then(resp => resp)
);