import { useEffect } from 'react'
import * as C from './style'
import { User } from '../../model/User'

export const Modal = ({ user, onClose }: {
    user: User,
    onClose: () => void
}) => {

    const fields = [
        new Field(user.username, "Username"),
        new Field(user.following.toString(), "Seguindo"),
        new Field(user.createdDate.toLocaleDateString(), "Cadastrado(a)"),
        new Field(user.followers.toString(), "Seguidores"),
        new Field(user.url, "URL"),
        new Field("Fechar")
    ]

    function getField(field: Field, index: number) {
        return <C.UserInfoContainer key={index}>
            <C.UserInfoTitle>
                {field.title}
            </C.UserInfoTitle>
            <C.UserInfoSubTitle>
                {field.value}
            </C.UserInfoSubTitle>
        </C.UserInfoContainer>
    }

    function getButton(field: Field, index: number) {
        return <C.DivButton key={index}>
            <C.UserButton onClick={onClose}>
                {field.value}
            </C.UserButton>
        </C.DivButton>
    }

    return (
        <C.Container>
            <C.ModalBox>
                <C.ModalAvatar>
                    <img src={user.avatarUrl} alt="" />
                </C.ModalAvatar>
                <C.ModalInfo>
                    <h1>{user.name || user.username}</h1>
                    <hr />
                    <div>
                        {fields.map((item, index) => {
                            switch (item.type) {
                                case FieldType.BUTTON:
                                    return getButton(item, index)
                                default:
                                    return getField(item, index)
                            }
                        })}
                    </div>
                </C.ModalInfo>
            </C.ModalBox>
        </C.Container>
    )
}

enum FieldType {
    FIELD, BUTTON
}

class Field {
    title: string
    value: string
    type: FieldType

    constructor(value: string, title?: string, ) {
        this.title = title || ""
        this.value = value
        this.type = title ? FieldType.FIELD : FieldType.BUTTON
    }
}