import React from 'react';
import { Provider } from 'react-redux';
//import '.styles/global';
import { BrowserRouter } from 'react-router-dom';
import './config/reactotron';
import GlobalStyle from './styles/global';
//import Meu from './components/Meu';
//import { Container } from  './components/Sidebar/styles';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import store from './store';






//import Sidebar from './components/Sidebar';

/*
const App = () => <Sidebar />;


export default App;
<Meu />
*/

export default function App() {
  return (

    <>
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <Container >
              <Sidebar />
              <Content>
                <Header />
                <Routes />
              </Content>
            </ Container>
            <Player />
          </Wrapper>
          <GlobalStyle />
        </BrowserRouter>
      </Provider>
    </>
  )
};

