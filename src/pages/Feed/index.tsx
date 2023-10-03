import { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { UserCard } from './components/UserCard';
import { Header } from '../../../components/Header';
import { RepositoryCard } from './components/RepositoryCard';
import { api } from '../../lib/api';
import {
  FeedContainer,
  FeedInfo,
  InputField,
  RepositoriesContainer,
} from './styles';

interface IssueProps {
  url: string;
  id: number;
  title: string;
  body: string;
  number: number;
  created_at: string;
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
          <span>{issueData.length} publicações</span>
        </FeedInfo>
        <InputField type='text' placeholder='Buscar conteúdo' />
        <RepositoriesContainer>
          {issueData.map((issue) => {
            return (
              <NavLink to={`/issue/${issue.number}`} key={issue.id}>
                <RepositoryCard
                  title={issue.title}
                  description={
                    <ReactMarkdown children={formatBodyText(issue.body)} />
                  }
                  data={formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                />
              </NavLink>
            );
          })}
        </RepositoriesContainer>
      </FeedContainer>
    </>
  );
}
