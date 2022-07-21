let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    ]


    //1
    function addID() {
        for(let i = 1; i < products.length; i++) {
            products[i].id = i;
            console.log(products[i])
        }
    }
    addID();

    //2
    function printProductName() {
        products.map(productName => console.log(productName.name));
    }
    printProductName();

    //3
    function printProduct3() {
        products.find(product => product.id === 3 && console.log(product));
    }
    printProduct3();

    //4
    function printProductBlack() {
        products.filter(product => {
            for(let color of product.colors) {
                if(color === 'black') {
                    console.log(product)
                }
            }
        })
    }
    printProductBlack();
    
    //5
    function printNonColorProduct() {
        products.filter(product => product.colors.length === 0 && console.log(product))
            
    }
    printNonColorProduct();