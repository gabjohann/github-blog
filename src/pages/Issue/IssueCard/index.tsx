import { format, parseISO } from 'date-fns';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  MessageCircle,
  CalendarDays,
} from 'lucide-react';
import { ContentContainer, IssueCardContainer, IssueInfo } from './styles';
import { api } from '../../../lib/api';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface IssueFetchProps {
  id: string | undefined;
}

interface IssueCardProps {
  title: string;
  username: string;
  data: string;
  comments: number;
  body: string;
}

export function IssueCard(id: IssueFetchProps) {
  const [issueData, setIssueData] = useState<IssueCardProps | null>(null);
  const [issueUrl, setIssueUrl] = useState<string>('');

  useEffect(() => {
    async function getIssueInfo() {
      const issueId = Number(id.id);
      const response = await api.get(
        `repos/gabjohann/github-blog/issues/${issueId}`
      );

      const data = response.data;

      setIssueUrl(data.url);

      setIssueData({
        title: data.title,
        username: data.user.login,
        data: data.created_at,
        comments: data.comments,
        body: data.body,
      });
    }

    getIssueInfo();
  }, [id.id]);

  function formatDate(date) {
    const parsedDate = parseISO(date);

    // Formatação da data
    const formattedDate = format(parsedDate, 'dd/MM/yyyy');
    return formattedDate;
  }

  return (
    <>
      <IssueCardContainer>
        <IssueInfo>
          <div>
            <a href='/'>
              <ChevronLeft size={14} />
              VOLTAR
            </a>
            <a target='_blank' href={issueUrl}>
              VER NO GITHUB
              <ExternalLink size={14} />
            </a>
          </div>

          <h1>{issueData?.title}</h1>
          <ul>
            <li>
              <Github color='#3A536B' size={18} />
              {issueData?.username}
            </li>
            <li>
              <CalendarDays color='#3A536B' size={18} />
              {formatDate(issueData?.data)}
            </li>
            <li>
              <MessageCircle color='#3A536B' size={18} fill='true' />
              {issueData?.comments} comentários
            </li>
          </ul>
        </IssueInfo>
      </IssueCardContainer>

      <ContentContainer>
        <ReactMarkdown children={issueData?.body} />
      </ContentContainer>
    </>
  );
}
