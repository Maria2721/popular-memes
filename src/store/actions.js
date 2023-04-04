export const fetchData = () => {
  return (dispatch) => {
    return fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "FetchData", data: json }))
      .catch((err) => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
  };
};

export const toggleLike = (id) => ({
  type: "TOGGLE_LIKE",
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_LIKED",
};
