    //PRATICA 02
    //01
    function addNewProduct() {
        products.push({ name: 'Charger', price: 10, quantity: 7, colors: ['blakc', 'white'] });
        console.log(products);
    }
    addNewProduct();

    //02
    function removeProductsWithoutStock() {
        for(let product of products) {
            if(product.quantity === 0) {
                products.splice(product.id - 1, 1);
            }
        }
    }
    removeProductsWithoutStock();

    //03
    function sumAllProducts() {
        let sumProduct = 0;
        
        for(let product of products) {
            sumProduct += product.quantity;
        }
        console.log(sumProduct);
    }
    sumAllProducts();

        //04
        function compareSomeProducts(examplePrice) {
            for (let product of products) {
                product.price > examplePrice && console.log(product);
            }
        }
        compareSomeProducts(100);

        //05
        function productsWithLetterO() {
            for (let product of products) {
                for(let letter of product.name) {
                    letter === 'o' && console.log(product);
                }
            }
        }
        productsWithLetterO();