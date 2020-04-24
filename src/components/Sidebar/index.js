import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
    }).isRequired,
  };

  componentDidMount() {
    console.tron.log('this.props.playlists')
    console.tron.log(this.props.playlists)
    this.props.getPlaylistsRequest();
  }
  render() {
    return (
      <Container >
        <div >
          <Nav main>
            <li>
              <a href="">Navegar</a>
            </li>
            <li>
              <a href="">Radio</a>
            </li>
          </Nav>

          <Nav>
            <li><span>SUA BIBLIOTECA</span></li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados recentemente</a>
            </li>
            <li>
              <a href="">Musicas</a>
            </li>
            <li>
              <a href="">Álbums</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos locais</a>
            </li>
            <li>
              <a href="">Videos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>

          </Nav>

          <Nav>
            <li>
              <span>PLAYLIST</span>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={'playlists/${playlist.id}'}>TESTE</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt='Adicionar playlist' />
          Nova Playlist
        </NewPlaylist>
      </Container >
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);