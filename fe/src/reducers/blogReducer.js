const initialState = {
  blogs: localStorage.getItem("blogs")
    ? JSON.parse(localStorage.getItem("blogs"))
    : [],
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case "BLOG_LIST":
      return { blogs: action.payload };
    case "BLOG_ADD":
      return { blogs: [action.payload, ...state.blogs] };
    default:
      return state;
  }
};

export { initialState, blogReducer };
