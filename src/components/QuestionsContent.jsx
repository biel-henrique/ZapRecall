import QuestionsItems from "./QuestionsItems";
import styled from "styled-components";

export default function QuestionsContent(props) {

    let {cards, finished, setFinished} = props;

    return (
        <>
    <Margin></Margin>
    <DivItems>
        {cards.map((item, index) => {
            return (
                <QuestionsItems
                key = {index}
                item = {item}
                question = {item.question} 
                answer = {item.answer} 
                index = {index} 
                finished = {finished}
                setFinished = {setFinished}/>
            )
        })}
    </DivItems>
    </>
    )
}

const DivItems = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    gap: 25px;
    align-items: center;
    padding-bottom: 239px;
    overflow-y: auto;
    border-radius: 5px;
    background-color: rgba(251, 107, 107, 1);
`

const Margin = styled.div`
    margin-bottom: 3px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.3);
    background-color: rgba(251, 107, 107, 1);
    height: 42px;
`