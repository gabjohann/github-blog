import styled from 'styled-components';

export const FeedContainer = styled.div`
  padding: 0 18rem;
`;

export const RepositoriesContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 3rem auto 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  gap: 2rem;
`;
