import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import styled from 'styled-components'

// MODELS
import { User } from "../../model/User"
import { UserHome } from "../../model/UserHome"
import { homeController } from "./HomeController"

// COMPONENTS
import * as C from './Style'
import { Header } from "../../components/Header"
import { BoxUser } from "../../components/BoxUser"
import { Modal } from "../../components/Modal"

import logo_big from '../../assets/logo_big.svg'
import logo_bigDark from '../../assets/logo_bigDark.svg'

export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [users, setUsers] = useState<UserHome[]>([])
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [darkTheme, setDarkTheme] = useState(false)


    function onSearchClick(username: string) {
        setSearchParams({ username })
    }


    function onSeeMoreClick(username: string) {
        homeController.getUser(username, setSelectedUser)
    }

    useEffect(() => {
        const username = searchParams.get("username")
        username && homeController.getAllUsers(username, setUsers)
        if(!username) setUsers([])
    }, [searchParams])

    return (
        <>
            <Header setDarkTheme={{setDarkTheme, darkTheme}} onSearch={onSearchClick} />

            {selectedUser && <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />}

            <C.Container dark={darkTheme} blur={selectedUser != null}>
                {users.length == 0 ? 
                    <C.BackgroundImage>
                        <img src={darkTheme ? logo_big : logo_bigDark} alt="" />
                    </C.BackgroundImage> :
                    users.map((user, index) => {
                        return (
                            <div key={index}>
                                <BoxUser dark={darkTheme} onSeeMoreClick={onSeeMoreClick} user={user} />
                            </div>
                        )
                    })
                }
            </C.Container>

        </>
    )
}