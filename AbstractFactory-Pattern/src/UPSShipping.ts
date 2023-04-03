import { AbstractShipping } from "./AbstractShipping"

export class UPSShipping extends AbstractShipping {
  ship() {
    console.log("Ship with UPS")
  }
}
