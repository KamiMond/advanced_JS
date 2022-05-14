'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
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
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.image = `${'https://via.placeholder.com/200/DCE7D6/91CE92?text=' + product.product_name}`;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.image}">
                <h3>${this.title}</h3>
                <p>${this.price}₽</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
console.log(list);

class ShoppingCart {
    constructor(container = '.cart-shopping') {
        this.container = container;
        this.goods = [];
        this.showCart();
        this._getCart()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getCart() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    //Функция формирует вид списка покупок
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new GoodInCart();
            block.insertAdjacentHTML("beforeend", item.render(product));
        }
    }
    //Функция переключает видимость списка покупок при клике по кнопке "Корзина"
    showCart() {
        document.querySelector(".btn-cart").addEventListener('mouseover', () => {
            document.querySelector(this.container).classList.toggle('hidden');
        });
    }
}

class GoodInCart {
    //Функция формирует вид товара в корзине
    render(product) {
        return `<div class="cart-shopping-row">
            <div>${product.id_product}</div>
            <div>${product.product_name}</div>
            <div>${product.quantity} шт.</div>
            <div>${product.price}₽</div>
        </div>`;
    }
}

let cart = new ShoppingCart();