export class Event {
    public id: string
    public title: string
    public description: string
    public location: string
    public date: Date
    public image: string
    public isFeatured: boolean


    constructor({
        id,
        title,
        description,
        location,
        date,
        image,
        isFeatured,
    }: Event) {
        this.id = id
        this.title = title
        this.description = description
        this.location = location
        this.date = date
        this.image = image
        this.isFeatured = isFeatured
    }
}
