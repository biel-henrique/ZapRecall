import QuestionsBody from "./components/QuestionsBody";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import CARDS from "./mock";



export default function App() {
  return (
    <>
    <GlobalStyle />
    <All>
    <QuestionsBody cards={CARDS}/>
    </All>
    </>
  )
  
}

const All = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: black;
  overflow: hidden;
`
