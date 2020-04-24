import React from 'react';



import { Container, Title, Playlist, List } from './styles';


const Browse = () => (
  <Container>
    <Title>Navegar</ Title>
    <List>
      <Playlist to="/playlist/1">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71Z0rLIvpuL._AC_SL1448_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71Z0rLIvpuL._AC_SL1448_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71Z0rLIvpuL._AC_SL1448_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71Z0rLIvpuL._AC_SL1448_.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </Playlist>
    </List>
  </Container>
);


export default Browse;