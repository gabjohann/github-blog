import { Header } from '../../../components/Header';
import { FeedContainer } from './styles';
import { UserCard } from './components/UserCard';

export function Feed() {
  return (
    <>
      <Header />
      <UserCard />
      <FeedContainer></FeedContainer>
    </>
  );
}
