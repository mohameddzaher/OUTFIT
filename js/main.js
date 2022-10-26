// start wow connect
new WOW().init();
// end wow connect 



// Define Products
let productsDom = document.querySelector(".products");

let products = [
    {
        id: 1,
        title: "Slim fit easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/IMG_2966.JPG`
    },
    {
        id: 2,
        title: "Slim Fit Easy-ironhhhhhhhhh shirt",
        price: "350 LE",
        imageUrl: `images/IMG_3548.JPG`
    },
    {
        id: 3,
        title: "Slim Fit Easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/a1.JPG`
    },
    {
        id: 4,
        title: "Slim Fit Easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/IMG_3679.JPG`
    },
    {
        id: 4,
        title: "Slim Fit Easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/a4.JPG`
    },
    {
        id: 4,
        title: "Slim Fit Easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/a5.JPG`
    },
    {
        id: 1,
        title: "Slim Fit Easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/IMG_2966.JPG`
    },
    {
        id: 2,
        title: "Slim Fit Easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/IMG_3548.JPG`
    },
    {
        id: 3,
        title: "Slim Fit Easy-iron shirt",
        price: "350 LE",
        imageUrl: `images/IMG_3677.JPG`
    },
    {
        id: 1,
        title: "Slim Fit Easy-iron shirt",
        price: "340 LE",
        imageUrl: `images/IMG_2966.JPG`
    },
    {
        id: 2,
        title: "Slim Fit Easy-iron shirt",
        price: "340 LE",
        imageUrl: `images/IMG_3548.JPG`
    },
    {
        id: 3,
        title: "Slim Fit Easy-iron shirt",
        price: "340 LE",
        imageUrl: `images/IMG_3677.JPG`
    },

]

function drawProductsUI () {
    let productsUI = products.map( (item) => {
        return `
        <div class="product-item">
                <img src="${item.imageUrl}">
                <div class="product-des">
                    <span><p>${item.title}</p></span>
                    <div class="price-and-add">
                        <p>${item.price}</p>
                        <a href="#"><p>Add To cart</p></a>
                    </div>
                </div>
                <div class="heart">
                    <a href="#"><i class="bi bi-heart"></i></a>
                </div>
            </div>
        `
    } )
    productsDom.innerHTML = productsUI.join("");
}

drawProductsUI();
