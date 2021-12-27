import { useState } from 'react'

import * as C from './style'

import logo from '../../assets/Logotype.svg'
import search from '../../assets/search.svg'

interface HeaderProps {

    onSearch: (username: string) => void
}

export const Header = ( {onSearch}: HeaderProps ) => {

    const [searchValue, setSearchValue] = useState<string>('')

    function handleSearch() {

        onSearch(searchValue)
    }

    return(
        <C.Container>
            <C.ResponseImg>
                <img src={logo} alt="Logomarca do gitSearch" />
            </C.ResponseImg>

            <C.SearchDiv>
                <C.InputSearch type='search' onChange={e => setSearchValue(e.target.value)} />
                <C.ResponseIcon onClick={handleSearch}>
                    <C.IconSearch src={search}/>
                </C.ResponseIcon>
            </C.SearchDiv>


        </C.Container>
    )
}