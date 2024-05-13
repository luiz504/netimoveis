type PropertyData = {
  City: string
  Title: string
  Author: string
  Rooms: number
  Tags: string[]
  Price: number
}

export class PropertyAnnounce {
  City: string
  Title: string
  Author: string
  Rooms: number
  Tags: string[]
  Price: number
  private constructor(data: PropertyData) {
    this.City = data.City
    this.Title = data.Title
    this.Author = data.Author
    this.Rooms = data.Rooms
    this.Tags = data.Tags
    this.Price = data.Price
  }
}
