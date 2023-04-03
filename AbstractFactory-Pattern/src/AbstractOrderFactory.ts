import { AbstractPayment } from "./AbstractPayment"
import { AbstractShipping } from "./AbstractShipping"

export abstract class AbstractOrderFactory {
  abstract createPayment(): AbstractPayment
  abstract createShipping(): AbstractShipping
}
