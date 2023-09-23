import { UserCard } from './components/UserCard';
import { Header } from '../../../components/Header';
import { RepositoryCard } from './components/RepositoryCard';
import {
  FeedContainer,
  FeedInfo,
  InputField,
  RepositoriesContainer,
} from './styles';

export function Feed() {
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
