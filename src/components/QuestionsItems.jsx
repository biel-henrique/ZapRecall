import styled from "styled-components"
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import iconeErro from "../assets/icone_erro.png";
import iconeCerto from "../assets/icone_certo.png";
import iconeQuase from "../assets/icone_quase.png";
import { useState } from "react";

export default function QuestionsItems(props) {

    let {item, question, answer, index, finished, setFinished} = props;

    const [phase, setPhase] = useState(0)

    function cardPhase() {
        if (phase === 0) {
            setPhase(1);
        } else if (phase === 1) {
            setPhase(2);
        }
    }

    function finishTask() {
        let newArray = [...finished, item]
        setFinished(newArray)
    }

    return <div>
        <Items $phase={phase}>
            <h1>{
                phase === 1 ? question : 
                phase === 2 ? answer : `Pergunta ${index+1}`}
            </h1>
            {phase !== 2 ? (
                <img onClick={cardPhase} src={(
                    phase === 0 ? setaPlay : 
                    phase === 3 ?  iconeErro :
                    phase === 4 ? iconeQuase :
                    phase === 5 ? iconeCerto : setaVirar)} alt="seta" />
            ): (
                <Button phase={phase}>
                    <ButtonColor onClick={() => {setPhase(3); finishTask();}} color='red'>Não Lembrei</ButtonColor>
                    <ButtonColor onClick={() => {setPhase(4); finishTask();}} color='orange'>Quase não lembrei</ButtonColor>
                    <ButtonColor onClick={() => {setPhase(5); finishTask();}} color='green'>Zap!</ButtonColor>
                </Button>
            )}
        </Items>
    </div> 
}

const Items = styled.div`
    text-decoration: ${props => (
        props.$phase === 3 || 
        props.$phase === 4 || 
        props.$phase === 5 ? 'line-through' : 
        null)};
    position: relative;
    text-align: center;
    width: 300px;
    color: ${props => (
        props.$phase === 3 ? 'rgba(255, 48, 48, 1)' :
        props.$phase === 4 ? 'rgba(255, 146, 46, 1)' : 
        props.$phase === 5 ? 'rgba(47, 190, 52, 1)' : null
    )};
    min-height: ${props => (
        props.$phase === 1 || props.$phase === 2 ? '131px' : '65px'
    )};
    background-color: ${props => (
        props.$phase === 1 || props.$phase ===2 ? 'rgba(255, 255, 212, 1)' : 
        ' rgba(255, 255, 255, 1)'   
    )};
    border-radius: 5px;
    display: flex;
    flex-direction: ${props => (
        props.$phase === 2 ? 'column' : null
    )};
    align-items: center;
    justify-content: ${props => (
        props.$phase === 2 ? 'space-evenly' : 'space-between'
    )};
    word-wrap: break-word;
    word-break: break-word;
    padding: 10px;
    img {
        position: ${props => (
            props.$phase === 1 ? 'Absolute' : null
        )};
        margin-right: ${props => (
            props.$phase === 1 ? '10px' : null
        )};
        bottom: 0;
        right: 0;
        margin-bottom: ${props => (
            props.$phase === 1 ? '5px' : null
        )};
    }
`

const Button = styled.div`
    display: flex;
    gap: 5px;
    button {
        width: 90px;
        height: 37px;
        border-radius: 5px;
        font-family: 'recursive' sans-serif;
        color: white;
        font-weight: bold;
        border: 0px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }
`

const ButtonColor = styled.button`
    background-color: ${props => (
        props.color === 'red' ? 'rgba(255, 48, 48, 1)' :
        props.color === 'orange' ? 'rgba(255, 146, 46, 1)' : 
        props.color === 'green' ? 'rgba(47, 190, 52, 1)' : ''
    )} ;
`
