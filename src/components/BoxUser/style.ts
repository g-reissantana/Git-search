import styled from "styled-components"

export const Container = styled.div`

    width: 240px;
    height: 350px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    border-radius: 15px;

    box-shadow: -1px 5px 10px rgba(0,0,0,0.4);
    overflow: hidden;

`

export const BoxAvatar = styled.img`

    width: 100%;
    height: 190px;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    object-fit: cover;
    object-position: top;
`

export const BoxDescription = styled.div`

    flex: 1;
    max-width: 100%;

    display: flex;
    flex-direction: column;

    padding: 8px;

    h1 {
        font-size: 19px;
    }

    a {
        font-size: 13px;
        text-decoration: none;
        color: #03CADA;
        margin: 5px 0;

        &:hover {
            filter: brightness(.9);
        }
    }

    small {
        margin-bottom: 5px;
    }
`

export const SeeMore = styled.div`
    background: #8C56C2;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    max-height: 40px;
    
    text-transform: uppercase;
    
    margin-top: 18px;
    border-radius: 12px;

    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }
`