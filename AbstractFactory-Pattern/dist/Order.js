var Order = /** @class */ (function () {
    function Order(factory) {
        this.payment = factory.createPayment();
        this.shipping = factory.createShipping();
    }
    Order.prototype.doOrder = function () {
        this.payment.pay();
        this.shipping.ship();
    };
    return Order;
}());
export { Order };
