/// <reference path="productCategory.ts" />
interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}
class Initial implements Product {
    name = "Initial";
    price = 0;
}
class CocaCola implements Product {
    name = "Coca Cola";
    price = 2.30;
    category = new SodaCategory();
}
class Lays implements Product {
    name = "Lays Potato Chips";
    price = 1.70;
    category = new ChipsCategory();
}
class MixCandies implements Product {
    name = "Mix Candies";
    price = 3.00;
    category = new CandyCategory();
}
class Hershey implements Product {
    name = "Hersey's Candy Bar";
    price = 3.59;
    category = new CandyBarCategory();
}