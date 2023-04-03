import { AbstractShipping } from "./AbstractShipping"

export class FedexShipping extends AbstractShipping {
  ship() {
    console.log("Ship with Fedex")
  }
}
