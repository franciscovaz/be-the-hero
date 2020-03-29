import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${(props) => props.theme.colors.content};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }

  Link {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
    background: ${(props) => props.theme.colors.input};
    color: ${(props) => props.theme.colors.text};
    transition: color, background 1s ease 0s, transform 1s ease 0s;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;
