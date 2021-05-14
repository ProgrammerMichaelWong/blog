import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'addBlogPost':
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: state.length + 1001,
        },
      ];
    case 'deleteBlogPost':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case 'editBlogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'addBlogPost', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'deleteBlogPost', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (title, content, id, callback) => {
    dispatch({ type: 'editBlogPost', payload: { title, content, id } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'Title', content: 'Content', id: 1000 }]
);
