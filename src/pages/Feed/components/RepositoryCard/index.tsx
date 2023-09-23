import { RepositoryCardComponent } from './styles';

interface RepositoryCardProps {
  title: string;
  description: string;
  data: string;
}

export function RepositoryCard({
  title,
  description,
  data,
}: RepositoryCardProps) {
  return (
    <RepositoryCardComponent>
      <div>
        <h1>{title}</h1>
        <span>{data}</span>
      </div>
      <p>{description}</p>
    </RepositoryCardComponent>
  );
}
