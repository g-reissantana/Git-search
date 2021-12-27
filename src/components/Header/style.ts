import styled from "styled-components";

export const Container = styled.header`
    background: #f2f2f2;

    width: 100vw;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    position: fixed;
    z-index: 97;

    box-shadow: -2px 4px 15px #000000AA;

`
export const ResponseImg = styled.div`

    width: 80px;
    height: 100%;

    display: flex;
    align-items: center;
    margin-left: 20px;
`

export const SearchDiv = styled.div`
    width: 90%;
    height: 35px;

    border: solid 1px #00000022;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;

    margin-right: 20px;
`

export const InputSearch = styled.input`

    flex: 1;
    outline: none;
    border-radius: 5px;

    padding: 10px;

`
export const ResponseIcon = styled.div`

    width: 40px;
    height: 100%;
    background: #8C56C2;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    cursor: pointer;

    &:hover {
        filter: brightness(1.2);
    }

`

export const IconSearch = styled.img`

    width: 20px;
    height: 20px;   

`
