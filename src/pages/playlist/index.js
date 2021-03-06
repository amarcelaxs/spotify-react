import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';


const Playlist = () => (

  <Container>
    <Header>
      <img src="https://images-na.ssl-images-amazon.com/images/I/71Z0rLIvpuL._AC_SL1448_.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Green Day</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>

    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th></th>
        <th>Titulo</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duração" /></th>
      </thead>
      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Green day</td>
          <td>American Idiot</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Green day</td>
          <td>American Idiot</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Green day</td>
          <td>American Idiot</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Green day</td>
          <td>American Idiot</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Green day</td>
          <td>American Idiot</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Green day</td>
          <td>American Idiot</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Papercut</td>
          <td>Green day</td>
          <td>American Idiot</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>

);


export default Playlist;