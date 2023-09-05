import styled from 'styled-components';

export const BlogContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > h2 {
    margin: 0;
  }

  & > .blog-post-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & > .blog-post-info > .remove-button {
    width: 5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: red;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  & > .blog-post-info > div > .like-button {
    width: 3rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: blue;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
