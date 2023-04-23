export class Comment {
    public id: string
    public text: string
    public author: string
    public eventId: string


    constructor({
        id,
        text,
        author,
        eventId,
    }: Comment) {
        this.id = id
        this.text = text
        this.author = author
        this.eventId = eventId
    }
}
