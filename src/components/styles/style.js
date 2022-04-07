import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Code Pro', monospace;
  }
`;


export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: #050214;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Titulo = styled.h1`
  font-size: 50px;
  margin-bottom: 100px;
`

export const Form = styled.form`
  width: 300px;
`

export const Label = styled.label`
  display: block;
  padding: 10px;
`

export const Input = styled.input`
  border: none;
  border-bottom: solid 2px #9B30F9;
  width: 100%;
  height: 25px;
  margin-top: 10px;
  padding: 13px;
  background: none;
  color: #fff;
  ::placeholder{
    color: #fff;
  }
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

export const Btn = styled.button`
  width: 280px;
  padding: 10px 0;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #9B30F9;
  :hover{
    background: #6d24ad;
  }
`