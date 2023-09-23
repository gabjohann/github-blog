import { HeaderContainer } from './styles';
import logo from '../../src/assets/logo.png';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt='' />
    </HeaderContainer>
  );
}
