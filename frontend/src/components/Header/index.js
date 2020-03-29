import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { HeaderContainer } from './styles';

// eslint-disable-next-line react/prop-types
export default function Header({ toggleTheme }) {
  const { colors, title, logoHero } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <img src={logoHero} alt="Be The Hero" width={80} />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={colors.text}
        offHandleColor={colors.secundary}
        onHandleColor={colors.text}
      />
    </HeaderContainer>
  );
}
