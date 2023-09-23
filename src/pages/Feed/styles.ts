import styled from 'styled-components';

export const FeedContainer = styled.div`
  padding: 0 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedInfo = styled.div`
  width: 54rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4.5rem 0 0.75rem;

  h1 {
    color: ${(props) => props.theme.subtitle};
    font: 700 1.125rem Nunito, sans-serif;
  }

  p {
    color: ${(props) => props.theme.span};
    font: 400 0.875rem Nunito, sans-serif;
  }
`;

export const InputField = styled.input`
  width: 54rem;

  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.input};
  border-radius: 6px;

  padding: 0.75rem 1rem;

  color: ${(props) => props.theme.text};

  &::placeholder {
    color: ${(props) => props.theme.label};
  }
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
