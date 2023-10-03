import styled from 'styled-components';

export const IssueCardContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
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

export const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme.title};
      font: 700 1.5rem Nunito, sans-serif;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
      font: 700 0.75rem Nunito, sans-serif;
    }

    p {
      color: ${(props) => props.theme.text};
      font: 400 1rem Nunito, sans-serif;
    }
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

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 3rem auto 3rem;
`;
