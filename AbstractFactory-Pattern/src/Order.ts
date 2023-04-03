import { AbstractOrderFactory } from "./AbstractOrderFactory"
import { AbstractPayment } from "./AbstractPayment"
import { AbstractShipping } from "./AbstractShipping"

export class Order {
  payment: AbstractPayment
  shipping: AbstractShipping

  constructor(factory: AbstractOrderFactory) {
    this.payment = factory.createPayment()
    this.shipping = factory.createShipping()
  }

  doOrder() {
    this.payment.pay()
    this.shipping.ship()
  }
}
