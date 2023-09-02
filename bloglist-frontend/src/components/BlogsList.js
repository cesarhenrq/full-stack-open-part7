import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { useInitializeData } from '../hooks';

import { initializeBlogs } from '../reducers/blogsReducer';

const BlogsList = () => {
  const blogs = useSelector((state) => {
    const sortedBlogs = [...state.blogs].sort((a, b) => b.likes - a.likes);

    return sortedBlogs;
  });

  useInitializeData(initializeBlogs);

  const linkStyle = {
    border: '1px solid black',
    display: 'block',
    padding: '10px',
  };

  return (
    <div>
      {blogs.map((blog) => (
        <Link
          style={linkStyle}
          key={blog.id}
          to={`/blogs/${blog.id}`}
          className="blog-link"
        >
          {blog.title} {blog.author}
        </Link>
      ))}
    </div>
  );
};

export default BlogsList;
