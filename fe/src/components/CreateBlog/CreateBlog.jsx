import { useState, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';
import axios from 'axios';
import { blogReducer, initialState } from '../../reducers/blogReducer';

const CreateBlog = () => {
  const {
    user: { accessToken },
  } = useContext(MyContext);
  const [state, dispatch] = useReducer(blogReducer, initialState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('blog-image', imageFile);

    const newBlog = await axios.post(
      'http://localhost:8080/api/v1/blogs',
      data,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    dispatch({ type: 'BLOG_ADD', payload: newBlog });
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-1/4 my-0 mx-auto flex flex-col text-center bg-slate-800 rounded"
      >
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-slate-800"
        />
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-slate-800"
        />
        <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
        <button type="submit">Create blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
