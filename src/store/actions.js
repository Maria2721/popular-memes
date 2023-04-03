export const fetchData = () => {
  return (dispatch) => {
    return fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "FetchData", data: json }))
      .catch((err) => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
  };
};
