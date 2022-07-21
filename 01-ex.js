function calcularPreco(product, price) { 
    const priceShipping = price <= 2000 ? 300 : price > 2000 && price <= 4000 ? 450 : 700;
    const totalPrice = price + priceShipping;

    console.log(
    `O produto ${product} custa ${price}. 
    Seu custo de envio é ${priceShipping}. 
    Portanto, o preço final é ${totalPrice}`
    )
}

calcularPreco('Macbook', 2500);
calcularPreco('Celular', 500);
calcularPreco('Playstation', 4500);

