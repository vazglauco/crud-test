import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { useAuth } from '../../contexts/useAuth';
import Button from '../../UI/components/Button';
import { Container } from './styles';

interface Props {
  toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
  const { signed, handleLogout } = useAuth()
  const themeContext = useContext(ThemeContext)

  return (
    <Container>
      <span>Front end Test</span>

      <div className="buttons">
        <Switch
          onChange={toogleTheme}
          checked={themeContext.title === 'dark'}
          onColor="#e2e2e2"
          onHandleColor="#757575"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        {signed && <Button onClick={handleLogout}>Sair</Button>}
      </div>
    </Container>
  );
}

export default Header;

//styles header