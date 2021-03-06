import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import {
  RegisterContainer,
  Content,
  Section,
  RegisterForm,
  InputGroup,
} from './styles';
import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no registo, tente novamente.');
    }
  }

  return (
    <RegisterContainer>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Registo</h1>
          <p>
            Faça o seu registo, entre na plataforma e ajude pessoas a
            encontrarem os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o Login
          </Link>
        </Section>

        <RegisterForm onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <InputGroup>
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </InputGroup>

          <button className="button" type="submit">
            Registar
          </button>
        </RegisterForm>
      </Content>
    </RegisterContainer>
  );
}
