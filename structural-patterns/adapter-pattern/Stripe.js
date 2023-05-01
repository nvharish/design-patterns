/**
 * This acts as an wrapper/adapter to the thrid party service class.
 */

const PaymentGateway = require("./PaymentGateway.js");
const StripeService = require("./StripeService.js");

class Stripe extends PaymentGateway {
    #stripeService;

    constructor(secretKey, publicKey) {
        super();
        this.#stripeService = new StripeService(secretKey, publicKey);
    }

    authorizePayment() {
        console.log("Stripe authorize payment");
        this.#stripeService.createPaymentMethod();
    }

    processPayment() {
        console.log("Stripe process payment");
        this.#stripeService.confirmPayment();
    }
}

module.exports = Stripe;
