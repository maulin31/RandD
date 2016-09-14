/// <reference path="product.ts" />

class productFactory {
    static getProduct(): CocaCola {
        return new CocaCola();
    }
}