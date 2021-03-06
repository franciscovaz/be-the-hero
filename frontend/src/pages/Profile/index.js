import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import { ProfileContainer, Header, ListCases } from './styles';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert('Erro ao eliminar o caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <ProfileContainer>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">
          Registar novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos Registados</h1>

      <ul>
        {incidents.map((incident) => (
          <ListCases key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            {/* Para conversçao do EURO */}
            <p>
              {Intl.NumberFormat('pt-PT', {
                style: 'currency',
                currency: 'EUR',
              }).format(incident.value)}
            </p>

            <button onClick={() => handleDelete(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </ListCases>
        ))}
      </ul>
    </ProfileContainer>
  );
}
