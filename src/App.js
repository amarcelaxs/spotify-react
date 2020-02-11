import React from 'react';
//import '.styles/global';
import GlobalStyle from './styles/global';
import Meu from './components/Meu'
//import { Container } from  './components/Sidebar/styles';
import Sidebar from './components/Sidebar';

//import Sidebar from './components/Sidebar';

/*
const App = () => <Sidebar />;


export default App;
*/

export default function App() {
  return (
   
    <>
      <Sidebar />;
      <GlobalStyle />
      <Meu />
    </>
  )
}