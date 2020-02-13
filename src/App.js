import React from 'react';
//import '.styles/global';
import GlobalStyle from './styles/global';
//import Meu from './components/Meu';
//import { Container } from  './components/Sidebar/styles';
import Sidebar from './components/Sidebar';

import Player from './components/Player';

import Header from './components/Header';

import {Wrapper, Container, Content } from './styles/components';





//import Sidebar from './components/Sidebar';

/*
const App = () => <Sidebar />;


export default App;
<Meu />
*/

export default function App() {
  return (
   
    <>
      <Wrapper>
        <Container >
          <Sidebar />
          <Content>
            <Header />

          </Content>
        </ Container>
        <Player />
      </Wrapper>
      
      <GlobalStyle />
      
    </>
  )
};

