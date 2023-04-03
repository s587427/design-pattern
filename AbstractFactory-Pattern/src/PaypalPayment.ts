import { AbstractPayment } from "./AbstractPayment"

export class PaypalPayment extends AbstractPayment {
  pay() {
    console.log("Pay with Paypal")
  }
}
