'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.countSum();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, image: 'https://via.placeholder.com/200/DCE7D6/91CE92?text=Laptop' },
            { id: 2, title: 'Mouse', price: 20, image: 'https://via.placeholder.com/200/DCE7D6/91CE92?text=Mouse' },
            { id: 3, title: 'Keyboard', price: 200, image: 'https://via.placeholder.com/200/DCE7D6/91CE92?text=Keyboard' },
            { id: 4, title: 'Gamepad', price: 50, image: 'https://via.placeholder.com/200/DCE7D6/91CE92?text=Gamepad' }
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    countSum() {
        let sumProducts = 0;
        this.goods.forEach(g => {
            sumProducts += g.price
        });
        console.log(sumProducts);
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.image = product.image;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.image}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class ShoppingCart {
    //Функция создаёт новый товар в корзине
    addGood() {

    }
    //Функция удаляет товар из корзины
    deleteGood() {

    }
    //Функция вносит изменения в существующий товар
    changeGood() {

    }
    //Функция считает общую цену товаров в корзине
    countTotal() {

    }
    //Функция формирует вид списка покупок
    render() {

    }

}

class GoodInCart {
    //Функция формирует вид товара в корзине
    render() {

    }
}