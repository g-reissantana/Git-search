import { User } from "../../model/User"
import { userRepository } from "../../repository/UserRepository"
import { UserHome } from "../../model/UserHome"

export const homeController = {
    async getAllUsers(
        username: string,
        setUsers: React.Dispatch<React.SetStateAction<UserHome[]>>
    ) {
        const users = await userRepository.searchUser(username)
        setUsers(users)
    },
    async getUser(
        username: string,
        setSelectedUser: React.Dispatch<React.SetStateAction<User|null>>
    ){
        const user = await userRepository.getUser(username)
        if(user != null) setSelectedUser(user)
    }
}

