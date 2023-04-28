/**
 * This is a thrid party provider's library which is incompatible with the client application.
 */

class PayPalService {
    #secretKey = undefined;
    #publicKey = undefined;

    constructor(secretKey, publicKey) {
        this.#secretKey = secretKey;
        this.#publicKey = publicKey;
    }

    createPaymentMethod() {
        console.log("PayPal service create payment method");
    }

    confirmPayment() {
        console.log("PayPal service confirm payment");
    }
}

module.exports = PayPalService;
