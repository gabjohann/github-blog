import styled from 'styled-components';

export const RepositoryCardComponent = styled.div`
  width: 26rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme.post};

  div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    gap: 2rem;
  }

  h1 {
    max-width: 70%;
    color: ${(props) => props.theme.title};
    font: 700 1.25rem Nunito, sans-serif;
  }

  p {
    color: ${(props) => props.theme.text};
    font: 400 1rem Nunito, sans-serif;
    margin-top: 1.25rem;
    word-wrap: break-word;
  }
`;
