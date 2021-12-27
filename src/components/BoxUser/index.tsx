import { useEffect } from 'react'
import { UserHome } from '../../model/UserHome'
import * as C from './style'

interface UserProps {

    user: UserHome
    onSeeMoreClick: (username: string) => void
}

export const BoxUser = ({user, onSeeMoreClick}: UserProps) => {

    function handleClickSeeMore() {

        onSeeMoreClick(user.username)
    }

    return(
        <C.Container>
            <C.BoxAvatar src={user.avatarUrl} />
            <C.BoxDescription>
                <h1>{user.username}</h1>
                <a href={user.htmlUrl}>{user.htmlUrl}</a>
                <small>1.00</small>
                <C.SeeMore onClick={handleClickSeeMore}>
                    Ver mais
                </C.SeeMore>
            </C.BoxDescription>
        </C.Container>
    )
}