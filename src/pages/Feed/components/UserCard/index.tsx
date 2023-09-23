import { ExternalLink, Github, Building, Users2 } from 'lucide-react';
import { UserCardContainer, UserInfo } from './styles';
import { api } from '../../../../lib/api';
import { useEffect, useState } from 'react';

interface UserCardProps {
  avatar_url: string;
  bio: string;
  name: string;
  followers: number;
  company: string;
  login: string;
}

export function UserCard() {
  const [userData, setUserData] = useState<UserCardProps | null>(null);
  async function getUserInfo() {
    const response = await api.get('users/gabjohann');

    const data = response.data;
    setUserData(data);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserCardContainer>
      <img src={userData?.avatar_url} alt='' />
      <UserInfo>
        <div>
          <h1>{userData?.name}</h1>
          <a href='https://github.com/gabjohann'>
            GitHub
            <ExternalLink size={14} />
          </a>
        </div>

        <p>{userData?.bio}</p>
        <ul>
          <li>
            <Github color='#3A536B' size={18} />
            {userData?.login}
          </li>
          <li>
            <Building color='#3A536B' size={18} /> {userData?.company}
          </li>
          <li>
            <Users2 color='#3A536B' size={18} />
            {userData?.followers} seguidores
          </li>
        </ul>
      </UserInfo>
    </UserCardContainer>
  );
}
