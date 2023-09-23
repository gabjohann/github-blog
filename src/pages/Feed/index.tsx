import { Header } from '../../../components/Header';
import { FeedContainer, RepositoriesContainer } from './styles';
import { RepositoryCard } from './components/RepositoryCard';
import { UserCard } from './components/UserCard';

export function Feed() {
  return (
    <>
      <Header />
      <UserCard />
      <FeedContainer>
        <RepositoriesContainer>
          <RepositoryCard
            title={'JavaScript data types and data structures'}
            description={
              'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'
            }
            data={'Há 1 dia'}
          />
          <RepositoryCard
            title={'teste'}
            description={
              'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'
            }
            data={'Há 1 dia'}
          />
          <RepositoryCard
            title={'teste'}
            description={
              'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'
            }
            data={'Há 1 dia'}
          />
          <RepositoryCard
            title={'teste'}
            description={
              'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'
            }
            data={'Há 1 dia'}
          />
        </RepositoriesContainer>
      </FeedContainer>
    </>
  );
}
