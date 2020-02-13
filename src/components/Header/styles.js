import styled from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';


export const Container = styled.header`
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin:10 0 0;
  `;


export const Search = styled.div`
  margin-top:10px;
  display:flex;
  align-items:center;
  border-radius:12px;
  height:24px;
  width:175px;
  padding: 5px 7px 6px 26px;    
  background:#fff url(${SearchIcon}) no-repeat 7px center;

  input{
    flex:1;
    font-size:12px;
    color:#121212;
    border:0;
  }

`;

export const User = styled.div`
  display:flex;
  align-items:center;
  font-size:13px;
  color:#fff;
  margin-right:15px;
  margin-top:10px;

  img{
      width:27px;
      height:27px;
      border-radius:50%; 
      margin-right:5px;
  }
`;