/**
 * This acts as an wrapper to the thrid party service class.
 */

const PaymentGateway = require("./PaymentGateway.js");
const PayPalService = require("./PayPalService.js");

class PayPal extends PaymentGateway {
    #secretKey = undefined;
    #publicKey = undefined;
    #PayPalService;

    constructor(secretKey, publicKey) {
        super();
        this.#secretKey = secretKey;
        this.#publicKey = publicKey;
        this.#PayPalService = new PayPalService();
    }

    authorizePayment() {
        console.log("PayPal authorize payment");
        this.#PayPalService.createPaymentMethod();
    }

    processPayment() {
        console.log("PayPal process payment");
        this.#PayPalService.confirmPayment();
    }
}

module.exports = PayPal;