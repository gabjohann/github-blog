import styled from 'styled-components';

export const FeedContainer = styled.div`
  padding: 0 18rem;
`;

export const UserCardContainer = styled.div`
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme.profile};
  border-radius: 10px;
  margin-top: -6.625rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    color: ${(props) => props.theme.title};
    font: 700 1.5rem Nunito, sans-serif;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.blue};
    font: 700 0.875rem Nunito, sans-serif;
  }

  p {
    color: ${(props) => props.theme.text};
    font: 400 1rem Nunito, sans-serif;
  }

  ul {
    gap: 1.5rem;
    padding-top: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.subtitle};
      font: 400 1rem Nunito, sans-serif;
    }
  }
`;
