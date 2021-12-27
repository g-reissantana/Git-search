export class User {
    name: string
    username: string
    followers: number
    following: number
    url: string
    createdDate: Date
    avatarUrl: string

    constructor(
        name: string,
        username: string,
        followers: number,
        following: number,
        url: string,
        createdDate: Date,
        avatarUrl: string
    ) {
        this.name = name
        this.username = username
        this.followers = followers
        this.following = following
        this.url = url
        this.createdDate = createdDate
        this.avatarUrl = avatarUrl
    }
}