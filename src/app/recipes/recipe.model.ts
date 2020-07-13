export class Recipe{
    public name:String;
    public description:String;
    public imagePath:String;
    constructor(name:String, description:string, imagePath:String){

        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
    }
}