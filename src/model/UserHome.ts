export class UserHome {
    username: string
    avatarUrl: string
    htmlUrl: string

    constructor(
        username: string,
        avatarUrl: string,
        htmlUrl: string
    ) {
        this.username = username
        this.avatarUrl = avatarUrl
        this.htmlUrl = htmlUrl
    }
}