import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { useInitializeData } from '../hooks';

import { initializeBlogs } from '../reducers/blogsReducer';

import { BlogsListContainer } from './BlogsList.styles';

const BlogsList = () => {
  const blogs = useSelector((state) => {
    const sortedBlogs = [...state.blogs].sort((a, b) => b.likes - a.likes);

    return sortedBlogs;
  });

  useInitializeData(initializeBlogs);

  return (
    <BlogsListContainer>
      {blogs.map((blog) => (
        <Link key={blog.id} to={`/blogs/${blog.id}`} className="blog-link">
          {blog.title} {blog.author}
        </Link>
      ))}
    </BlogsListContainer>
  );
};

export default BlogsList;
