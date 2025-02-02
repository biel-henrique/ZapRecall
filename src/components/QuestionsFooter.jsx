import styled from "styled-components"

export default function QuestionsFooter(props) {

    let {cards, finished} = props;

    let finishanswer = (cards.length === finished.length).toString()

    return (
        <Footer $finishanswer = {finishanswer}>
            <h1>{finished.length}/{cards.length} CONCLUÍDOS</h1>
            {finishanswer === 'true'? 
                <button onClick={() => location.reload()}>Reset!</button>
                :
                null
            }
        </Footer>
    )
}

const Footer = styled.div`
    width: 100%;
    height: 70px;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    bottom: 0;
    box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: ${props => (
        props.$finishanswer === 'true' ? 'space-evenly' :
        'center'
    )};
    border-radius: 3px;
    font-family: 'recursive', sans-serif;
    display: flex;
    h1 {
        font-size: 18px;
    }
    button {
        width: 90px;
        height: 37px;
        border-radius: 5px;
        font-family: 'Recursive' sans-serif;
        color: white;
        font-weight: bold;
        border: 0px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        background-color: green;
    }
`