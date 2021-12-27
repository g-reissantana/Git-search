import React, { SetStateAction, useState } from 'react'
import { User } from '../../model/User'

import * as C from './style'

import logo from '../../assets/Logotype.svg'
import logoDark from '../../assets/Logotype_dark.svg'
import search from '../../assets/search.svg'

import light from '../../assets/sun.svg'
import dark from '../../assets/sun_dark.svg'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {

    onSearch: (username: string) => void
    setDarkTheme: {setDarkTheme: React.Dispatch<SetStateAction<boolean>>, darkTheme: Boolean}
}

export const Header = ( {onSearch, setDarkTheme}: HeaderProps ) => {

    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState<string>('')

    function handleSearch() {
        onSearch(searchValue)
        setSearchValue('')
    }

    function handleEnterSearch(e: React.KeyboardEvent<HTMLElement>) {
        if(e.key == 'Enter') handleSearch()
    }

    function setSearchEmpty() {
        setSearchValue('')
        navigate('/')
    }

    return(
        <C.Container theme={setDarkTheme.darkTheme}>
            <C.ResponseImg>
                <img 
                    onClick={e => setDarkTheme.setDarkTheme(!setDarkTheme.darkTheme)} 
                    className='theme' 
                    src={setDarkTheme.darkTheme ? light : dark} 
                    alt="Sol - Clique para alterar o tema" 
                />
                <img onClick={setSearchEmpty} src={setDarkTheme.darkTheme ? logo : logoDark} alt="Logomarca do gitSearch" />
            </C.ResponseImg>

            <C.SearchDiv theme={setDarkTheme.darkTheme}>
                <C.InputSearch onKeyUp={e => handleEnterSearch(e)} placeholder='Pesquisar...' type='search' value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                <C.ResponseIcon theme={setDarkTheme.darkTheme} onClick={handleSearch}>
                    <C.IconSearch src={search}/>
                </C.ResponseIcon>
            </C.SearchDiv>


        </C.Container>
    )
}