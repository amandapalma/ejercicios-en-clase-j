const getDataFromApi = () => {
  return fetch('./data/emails.json')
    .then(response => response.json())
    .then(responseData => {
      return responseData;
    });
};

export default {
  getDataFromApi
};
