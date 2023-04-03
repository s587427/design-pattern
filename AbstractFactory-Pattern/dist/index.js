// 假设你正在构建一个电子商务网站，需要实现一个订单系统。
// 设计一个抽象工厂接口IOrderFactory，包含方法createPayment()和createShipping()
// ，并创建两个实现此接口的具体工厂类PaypalOrderFactory和CreditCardOrderFactory。
// 这两个具体工厂类分别能够使用Paypal和信用卡进行付款，以及使用不同的快递公司进行物流。
import { CreditCardOrderFactory } from "./CreditCardOrderFactory.js";
import { Order } from "./Order.js";
import { PaypalOrderFactory } from "./PaypalOrderFactory.js";
// 使用 CreditCardOrderFactory 創建訂單
var creditCardOrderFactory = new CreditCardOrderFactory();
var order1 = new Order(creditCardOrderFactory);
order1.doOrder(); // 輸出 "Pay with Credit Card" 和 "Ship with UPS"
// 使用 PaypalOrderFactory 創建訂單
var paypalOrderFactory = new PaypalOrderFactory();
var order2 = new Order(paypalOrderFactory);
order2.doOrder();
