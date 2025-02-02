import QuestionsContent from "./QuestionsContent";
import QuestionsFooter from "./QuestionsFooter";
import QuestionsHeader from "./QuestionsHeader";
import styled from "styled-components";
import { useState } from "react";

export default function QuestionsBody({cards}) {

    const [finished, setFinished] = useState([])

    return <Body>
    <QuestionsHeader/>
    <QuestionsContent 
        cards = {cards}
        finished = {finished}
        setFinished = {setFinished}/>
    <QuestionsFooter 
        cards = {cards}
        finished = {finished}
        setFinished = {setFinished}/>
    </Body>
}

const Body = styled.div`
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.3);
    width: 375px;
    min-height: 100vh;
    background-color: rgba(251, 107, 107, 1);
    position: relative;
    font-family: 'recursive', sans-serif;
    font-size: 12px;
    font-weight: 700;
`