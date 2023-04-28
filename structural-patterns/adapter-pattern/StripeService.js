/**
 * This is a thrid party provider's library which is incompatible with the client application.
 */

class StripeService {
    #secretKey = undefined;
    #publicKey = undefined;

    constructor(secretKey, publicKey) {
        this.#secretKey = secretKey;
        this.#publicKey = publicKey;
    }

    createPaymentMethod() {
        console.log("Stripe service create payment method");
    }

    confirmPayment() {
        console.log("Stripe service confirm payment");
    }
}

module.exports = StripeService;
