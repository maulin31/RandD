abstract class ProductCategory {
    protected imgPath = "img/";
    name: string;
    abstract getImageUrl(): string; 
}
class SodaCategory extends ProductCategory{
    name = "Soda";
    getImageUrl(): string {
        return this.imgPath + "SodaCan.png";
    }
}
class ChipsCategory extends ProductCategory{
    name = "Potato Chips";
    getImageUrl(): string {
        return this.imgPath + "Chips.jpg";
    }
}
class CandyCategory extends ProductCategory{
    name = "Candy";
    getImageUrl(): string {
        return this.imgPath + "Candy.jpg";
    }
}
class CandyBarCategory extends ProductCategory{
    name = "Candy bar";
    getImageUrl(): string {
        return this.imgPath + "CandyBar.jpg";
    }
}