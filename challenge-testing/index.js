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
        let total = 0
        for(const producto of this.carrito) {
            total += producto.price;
        }
        return total;
    };

    aplicarDescuento(porcentaje){
        if(porcentaje < 0 || porcentaje > 100) {
            throw new Error("El porcentaje dado debe estar entre el 0 y el 100.");
        }
        const total = this.calcularTotal();
        const descuento = (total * porcentaje) / 100;
        const totalConDescuento = total - descuento;

        return totalConDescuento;
    };
};

module.exports = {CarritoCompra};