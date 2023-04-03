import { AbstractPayment } from "./AbstractPayment"

export class CreditCardPayment extends AbstractPayment {
  pay() {
    console.log("Pay with Credit Card")
  }
}
