const $result = document.getElementById("result");
const $product = document.getElementById("product");

const renderProducts = (products) => {
    product.remove()
    products.forEach(product => {
        const productElement = $product.cloneNode(true);
        productElement.style.display = 'block';
        productElement.querySelector("#title").innerHTML = `Name: ${product.title}`;
        productElement.querySelector("#price").innerHTML = `Price: $${product.price}`;
        productElement.querySelector("#description").innerHTML = `<strong>Description</strong></strong>: ${product.description}`;
        productElement.querySelector("#image").src = product.image;
        productElement.querySelector("#category").innerHTML = product.category;
        $result.appendChild(productElement);
    });
}

function loadData() {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
        const products = response.data;
        renderProducts(products);
    })
    .catch(error => console.error(error));
}

loadData();