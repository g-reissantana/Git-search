import styled from "styled-components";
import logo from '../../assets/logo_big.svg'

export const Container = styled.main`
    filter:  ${(props: {blur: boolean}) => props.blur ? 'blur(2px)' : 'blur(0)'};


    background-position: center;
    background-repeat: no-repeat;

    max-width: 100vw;
    min-height: 100vh;
    padding: 130px 20px 50px 20px;

    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`

export const BackgroundImage = styled.div`

    width: 100vw;
    height: calc(100vh - 100px);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;
        height: auto;
    }
`