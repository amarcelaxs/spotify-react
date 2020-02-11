import styled from 'styled-components';
//import { createGlobalStyle } from 'styled-components';

export const Container = styled.aside`

  height:100%;
  width: 200px;
  background:#121212;
  color:#b3b3b3;

  display:flex;
  flex-direction:column;
  justify-content: space-between;

`;

export const NewPlaylist = styled.button`
  background: transparent;
  border:0;
  border-top:1px solid #282828;
  color:#b3b3b3;
  font-size:13px;
  display:flex;
  align-items:center;
  padding: 15px 25px;


  &:hover{
    color:#fff;
  }

  img{  
    margin-right: 10px;
    }
`;
//export default Container;