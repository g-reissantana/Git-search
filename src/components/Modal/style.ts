import styled from "styled-components";

export const Container = styled.div`

    background: rgba(0, 0, 0, .3);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 98;
`
export const ModalBox = styled.div`
    background: #ffffff;

    width: 75%;

    display: flex;
    align-items: center;

    border-radius: 20px;   
    padding: 20px;

    @media(max-width: 860px) {
        flex-direction: column;
        max-width: 430px;
    }

`

export const ModalAvatar = styled.div`
    flex: 1;
    width: 266px;
    max-height: 266px;

    display: flex;
    align-items: center;

    img {
        width: 100%;
        height: auto;

        border-radius: 20px;
    }
`

export const ModalInfo = styled.div`
    flex: 2;

    width: 300px;
    height: 100%;

    padding: 10px;
    border-radius: 20px;

    div {
        display: flex;
        flex-wrap: wrap;
        
    }

    h1 {
        font-size: 20px;
    }

    hr {
        background: rgba(0, 0, 0, .2);
        height: 1px;
        margin: auto;
    }
`
export const UserInfoContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    margin: 20px 0;
`

export const UserInfoTitle = styled.span`
    display: block;
    
    font-size: 16px;
    color: #2F2544;
    margin: 10px 0;
`

export const UserInfoSubTitle = styled.span`
    display: block; 

    font-size: 14px;
    color: #7B6490;

    @media(max-width: 860px) {
        word-break: break-word;
    }
`
export const DivButton = styled.div`
    flex: 1;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const UserButton = styled.div`


    color: #ffffff;
    background: #8C56C2;

    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    padding: 10px 20px;

    border: solid 2px #8C56C2;
    border-radius: 6px;

    transition: .2s;

    cursor: pointer;

    &:hover {
        background: #ffffff;
        color: #8C56C2;
        border: solid 2px #8C56C2;
    }
`

// BLZ