import { AbstractOrderFactory } from "./AbstractOrderFactory"
import { AbstractPayment } from "./AbstractPayment"
import { AbstractShipping } from "./AbstractShipping"
import { CreditCardPayment } from "./CreditCardPayment"
import { UPSShipping } from "./UPSShipping"

export class CreditCardOrderFactory extends AbstractOrderFactory {
  createPayment(): AbstractPayment {
    return new CreditCardPayment()
  }
  createShipping(): AbstractShipping {
    return new UPSShipping()
  }
}
