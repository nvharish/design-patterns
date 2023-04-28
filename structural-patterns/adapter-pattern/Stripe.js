/**
 * This acts as an wrapper to the thrid party service class.
 */

const PaymentGateway = require("./PaymentGateway.js");
const StripeService = require("./StripeService.js");

class Stripe extends PaymentGateway {
    #secretKey = undefined;
    #publicKey = undefined;
    #stripeService;

    constructor(secretKey, publicKey) {
        super();
        this.#secretKey = secretKey;
        this.#publicKey = publicKey;
        this.#stripeService = new StripeService();
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
