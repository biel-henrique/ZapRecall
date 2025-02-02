import styled from "styled-components";
import logo from '../assets/logo.png';

export default function QuestionsHeader() {
    return (
    <>
    <MarginTop></MarginTop>
    <Header>
    <img src={logo} alt="logo" />
    <h1>ZapRecall</h1>
    </Header>
    </>
    )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(251, 107, 107, 1);
    gap: 30px;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05);
    img {
        width: 60px;
        height: 60px;
    }
    h1{
        color: white;
    }
`

const MarginTop = styled.div`
    background-color: rgba(251, 107, 107, 1);
    height: 42px;
`

