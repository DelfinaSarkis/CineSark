const {CarritoCompra}= require("../index");

//constructor(): Inicializa el carrito como un array vacío.

//agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

//calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

//aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

describe("En la clase 'CarritoCompra'", () => {
    it("El constructor debe inicializar el carrito como un array vacío", () => {
        const carrito = new CarritoCompra();
        expect(carrito.carrito).toEqual([]);
    });

    it("La función 'agregarProducto' debe agregar al carrito el objeto que recibe", () => {
        const carrito = new CarritoCompra();
        const producto = {name: "Producto A", price: 10};
            carrito.agregarProducto(producto);
            expect(carrito.carrito).toContain(producto);
    });

    it("Debe calcular el total de la compra", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto({name: "Producto A", price: 10});
        carrito.agregarProducto({name: "Producto B", price: 20});

        expect(carrito.calcularTotal()).toBe(30);
    });

    it("Debe aplicar un descuento al total de la compra según el porcentaje especificado", () => {
        const carrito = new CarritoCompra();
        carrito.agregarProducto({name: "Producto A", price: 10});
        carrito.agregarProducto({name: "Producto B", price: 20});
        const totalAntesDescuento = carrito.calcularTotal();
        const totalConDescuento = carrito.aplicarDescuento(50);
        expect(totalConDescuento).toBe(totalAntesDescuento * 0.5);
    });
});