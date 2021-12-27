import styled from "styled-components";

export const Container = styled.header`
    background-color: ${props => props.theme === true ? '#462567' : '#f2f2f2'};
    
    filter: ${props => props.theme === true ? 'brightness(1.2);' : ''};

    width: 100vw;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    position: fixed;
    z-index: 97;

    transition: 0.3s;

    box-shadow: -2px 4px 15px #000000AA;

`

export const ResponseImg = styled.div`

    width: 80px;
    height: 100%;

    display: flex;
    align-items: center;
    gap: 18px;
    margin: 0 30px 0 22px;

    img {
        cursor: pointer;
    }
`

export const SearchDiv = styled.div`
    width: 90%;

    border-radius: 5px;
    border: solid 1px #00000022;
    border-right: 0;
    border-color: ${props => props.theme === true ? '#8C56C2' : '#00000022'};

    height: 38px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-right: 35px;
`

export const InputSearch = styled.input`

    flex: 1;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    padding: 10px;

`
export const ResponseIcon = styled.div`

    width: 40px;
    height: 38px;
    background: #8C56C2;
    background: #48B3FE;

    background: ${props => props.theme === true ? '#8C56C2' : '#48B3FE'};


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
