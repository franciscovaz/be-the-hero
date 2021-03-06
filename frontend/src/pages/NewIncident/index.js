import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { NewIncidentContainer, Content, Section, Form } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      const response = await api.post('incidents', data, {
        headers: { Authorization: ongId },
      });

      alert(`Caso com o ID: ${response.data.id} criado com sucesso.`);

      history.push('/profile');
    } catch (err) {
      alert('Erro ao registar caso, tente novamente.');
    }
  }

  return (
    <NewIncidentContainer>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Registar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>

        <Form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do caso"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
          />

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor em euros"
          />

          <button className="button" type="submit">
            Registar
          </button>
        </Form>
      </Content>
    </NewIncidentContainer>
  );
}
