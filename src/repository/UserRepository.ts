import axios from 'axios'
import { UserHome } from '../model/UserHome'
import { User } from "../model/User"

const instance = axios.create({
    baseURL: 'https://api.github.com/'
})

export const userRepository = {
    async searchUser(id: string) {
        try {
            const response = await instance.get(`search/users?q=${id}`)
            return response.data.items.map((item: any) => {
                return new UserHome(
                    item.login,
                    item.avatar_url,
                    item.html_url
                )
            }) as UserHome[]
        } catch (err) {
            console.error(err)
            return []
        }
    },
    async getUser(username: string): Promise<User|null> {
        try {
            const response = await instance.get(`users/${username}`)
            const { name, login, followers, following, url, created_at, avatar_url } = response.data
            return new User(
                name,
                login,
                followers,
                following,
                url,
                new Date(created_at),
                avatar_url
                
            )
        } catch (err) {
            console.error(err)
            return null
        }
    }
}