/**
 * This acts as an interface to the client application
 */

class PaymentGateway {

    constructor() { }

    authorizePayment() {
        throw new Error("Abstract class method cannot be invoked");
    }

    processPayment() {
        throw new Error("Abstract class method cannot be invoked");
    }

    verifyPayment() {
        console.log("Payment gateway verify payment");
    }
}

module.exports = PaymentGateway;