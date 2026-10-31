import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '58027101-8436ffa8ff8504f480371d17b';

const getImagesByQuery = query => {
  const searchParams = {
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
    key: API_KEY,
    q: query,
  };

  return axios
    .get(API_URL, { params: searchParams })
    .then(response => response.data);
};

export default getImagesByQuery;
