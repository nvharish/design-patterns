/**
 * This acts as an wrapper/adapter to the thrid party service class.
 */

const PaymentGateway = require("./PaymentGateway.js");
const PayPalService = require("./PayPalService.js");

class PayPal extends PaymentGateway {
    #PayPalService;

    constructor(secretKey, publicKey) {
        super();
        this.#PayPalService = new PayPalService(secretKey, publicKey);
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