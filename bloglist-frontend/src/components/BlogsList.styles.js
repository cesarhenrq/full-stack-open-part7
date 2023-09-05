import styled from 'styled-components';

export const BlogsListContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > .blog-link {
    border: 1px solid black;
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;
    border-radius: 0.25rem;
    margin: 0 0.5rem;
  }

  & > .blog-link:hover {
    opacity: 0.5;
  }
`;
