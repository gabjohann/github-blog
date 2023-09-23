import { ExternalLink, Github, Building, Users2 } from 'lucide-react';
import { UserCardContainer, UserInfo } from './styles';

export function UserCard() {
  return (
    <UserCardContainer>
      <img src='https://github.com/gabjohann.png' alt='' />
      <UserInfo>
        <div>
          <h1>Lucas Johann</h1>
          <a href='https://github.com/gabjohann'>
            GitHub
            <ExternalLink size={14} />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <Github color='#3A536B' size={18} />
            gabjohann
          </li>
          <li>
            <Building color='#3A536B' size={18} /> Rocketseat
          </li>
          <li>
            <Users2 color='#3A536B' size={18} />
            32 seguidores
          </li>
        </ul>
      </UserInfo>
    </UserCardContainer>
  );
}
