import React from "react";
import '../assets/styles/components/paymentMethod.scss';

const PaymentMethod = () => {
    return (
        <div className="payment-method">
            <h2 className="payment-title">3. Payment Method</h2>
            <form className="space-y-4">
                {/* Credit Card (Checked by Default) */}
                <label className="payment-option">
                    <div className="payment-option-content">
                        <input
                            type="radio"
                            name="payment"
                            value="credit"
                            defaultChecked
                        />
                        <div>
                            <span className="payment-label">Credit Card</span>
                            <p className="payment-description">
                                Mastercard, Maestro, American Express, Visa are accepted
                            </p>
                        </div>
                    </div>
                </label>

                {/* Cash on Delivery */}
                <label className="payment-option">
                    <div className="payment-option-content">
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                        />
                        <div>
                            <span className="payment-label">Cash on Delivery</span>
                            <p className="payment-description">
                                Pay with cash upon delivery
                            </p>
                        </div>
                    </div>
                </label>


                {/* Information Note with Checkbox */}
                <div className="payment-note">
                    <label className="payment-checkbox">
                        <input type="checkbox" defaultChecked />
                        <span>
                            Your personal information will be used to process your order, to support your experience on this site, and for other purposes described in the <a href="#" className="privacy-link">privacy policy</a>.
                        </span>
                    </label>
                </div>

                {/* Place Order Button */}
                <button className="payment-button">Place an order</button>
            </form>
        </div>
    );
};

export default PaymentMethod;
