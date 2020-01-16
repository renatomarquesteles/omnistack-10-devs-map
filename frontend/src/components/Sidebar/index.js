import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, InputBlock, InputGroup } from './styles';

export default function Sidebar({ devs, setDevs }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    toast.success('Dev cadastrado com sucesso!');
    setGithubUsername('');
    setTechs('');
    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <InputBlock>
          <label htmlFor="github_username">Usuário do Github</label>
          <input
            name="github_username"
            id="github_username"
            type="text"
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            required
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            type="text"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required
          />
        </InputBlock>

        <InputGroup>
          <InputBlock>
            <label htmlFor="latitude">Latitude</label>
            <input
              name="latitude"
              id="latitude"
              type="number"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              required
            />
          </InputBlock>

          <InputBlock>
            <label htmlFor="longitude">Longitude</label>
            <input
              name="longitude"
              id="longitude"
              type="number"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required
            />
          </InputBlock>
        </InputGroup>
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}
