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

export const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [users, setUsers] = useState<UserHome[]>([])
    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    function onSearchClick(username: string) {
        setSearchParams({ username })
    }

    function onSeeMoreClick(username: string) {
        homeController.getUser(username, setSelectedUser)
    }

    useEffect(() => {
        const username = searchParams.get("username")
        username && homeController.getAllUsers(username, setUsers)
    }, [searchParams])

    return (
        <>
            <Header onSearch={onSearchClick} />

            {selectedUser && <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />}

            {/* <C.Container background={users.length == 0 ? logo_big : ''} blur={selectedUser != null}>
                {users.map((user, index) => {
                    return (
                        <BoxUser onSeeMoreClick={onSeeMoreClick} key={index} user={user} />
                    )
                })}
            </C.Container> */}

            <C.Container blur={selectedUser != null}>
                {users.length == 0 ? 
                    <C.BackgroundImage>
                        <img src={logo_big} alt="" />
                    </C.BackgroundImage> :
                    users.map((user, index) => {
                        return (
                            <BoxUser onSeeMoreClick={onSeeMoreClick} key={index} user={user} />
                        )
                    })
                }
            </C.Container>

        </>
    )
}