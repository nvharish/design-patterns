const Stripe = require("./Stripe.js");
const PayPal = require("./PayPal.js");

let stripe = new Stripe("test secret", "test public");
stripe.authorizePayment();
stripe.processPayment();
stripe.verifyPayment();

console.log("=============================================");

let paypal = new PayPal("test secret", "test public");
paypal.authorizePayment();
paypal.processPayment();
paypal.verifyPayment();
