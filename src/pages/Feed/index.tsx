import { UserCard } from './components/UserCard';
import { Header } from '../../../components/Header';
import { RepositoryCard } from './components/RepositoryCard';
import {
  FeedContainer,
  FeedInfo,
  InputField,
  RepositoriesContainer,
} from './styles';
import { api } from '../../lib/api';
import { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface IssueProps {
  url: string;
  id: number;
  title: string;
  body: string;
}

export function Feed() {
  const [issueData, setIssueData] = useState<IssueProps[]>([]);

  const fetchIssues = useCallback(async () => {
    const response = await api.get('/search/issues', {
      params: {
        q: 'repo:gabjohann/github-blog',
      },
    });

    const data = response.data;
    setIssueData(data.items);
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  function formatBodyText(text: string) {
    const maxLength = 188;
    const ellipsis = ' ...';

    if (text.length > maxLength) {
      return text.substring(0, maxLength - ellipsis.length) + ellipsis;
    }

    return text;
  }

  return (
    <>
      <Header />
      <UserCard />

      <FeedContainer>
        <FeedInfo>
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </FeedInfo>
        <InputField type='text' placeholder='Buscar conteúdo' />
        <RepositoriesContainer>
          {issueData.map((issue) => {
            return (
              <>
                <RepositoryCard
                  key={issue.id}
                  title={issue.title}
                  description={
                    <ReactMarkdown children={formatBodyText(issue.body)} />
                  }
                  data={'Há 1 dia'}
                />
              </>
            );
          })}
        </RepositoriesContainer>
      </FeedContainer>
    </>
  );
}
