import { useParams } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { IssueCard } from './IssueCard';

export function Issue() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <IssueCard id={id} />
    </>
  );
}
