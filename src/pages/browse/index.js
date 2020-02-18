import React from 'react';


import { Container, Title,Playlist, List } from './styles';


const Browse = () => (
  <Container>
    <Title>Navegar</ Title>
    <List>
      <Playlist to="/playlist/1">
        <img src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg" 
          alt="Playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </ Playlist>
      <Playlist to="/playlist/1">
        <img src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg" 
          alt="Playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </ Playlist>
      <Playlist to="/playlist/1">
        <img src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg" 
          alt="Playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </ Playlist>
      <Playlist to="/playlist/1">
        <img src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg" 
          alt="Playlist" 
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial !!</p>
      </ Playlist>
    </List>
  </Container>
);


export default Browse;