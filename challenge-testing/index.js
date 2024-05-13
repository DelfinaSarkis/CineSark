class CarritoCompra {
    constructor(){
        this.carrito = [];
    };
    
    agregarProducto(producto) {
        if(typeof producto !== 'object' || producto === null) {
            throw new Error("El producto debe ser un objeto válido.");
        }
        this.carrito.push(producto);
    };

    calcularTotal(){
    return this.carrito.reduce((acc, producto) => acc + producto.price, 0);
    };

    aplicarDescuento(porcentaje){
        if(porcentaje < 0 || porcentaje > 100) {
            throw new Error("El porcentaje dado debe estar entre el 0 y el 100.");
        }
        return this.calcularTotal() * (1 - porcentaje / 100);
    };
};

module.exports = {CarritoCompra};