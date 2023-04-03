import { AbstractOrderFactory } from "./AbstractOrderFactory"
import { AbstractPayment } from "./AbstractPayment"
import { AbstractShipping } from "./AbstractShipping"
import { FedexShipping } from "./FedexShipping"
import { PaypalPayment } from "./PaypalPayment"

export class PaypalOrderFactory extends AbstractOrderFactory {
  createPayment(): AbstractPayment {
    return new PaypalPayment()
  }
  createShipping(): AbstractShipping {
    return new FedexShipping()
  }
}
