export class Category {
    constructor(public name: string, public type: string, public color: string, public favourite: boolean) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.favourite = favourite;
    }
}