import React, { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import api from '../../services/api';

import { Container, DevList, Dev, DevInfoContainer, DevInfo } from './styles';

export default function Home() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  return (
    <Container>
      <Sidebar devs={devs} setDevs={setDevs} />
      <main>
        <DevList>
          {devs.map(dev => (
            <Dev key={dev.github_username}>
              <DevInfoContainer>
                <header>
                  <img src={dev.avatar_url} alt={dev.name} />
                  <DevInfo>
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                  </DevInfo>
                </header>
                <p>{dev.bio}</p>
              </DevInfoContainer>
              <a href={`https://github.com/${dev.github_username}`}>
                Acessar perfil no Github
              </a>
            </Dev>
          ))}
        </DevList>
      </main>
    </Container>
  );
}
