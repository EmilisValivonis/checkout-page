import React from "react";
import '../assets/styles/components/shippingMethod.scss';

const ShippingMethod = () => {
    return (
        <div className="shipping-method">
            <h2 className="shipping-title">2. Shipping Method</h2>
            <form className="space-y-4">
                {/* Standard Delivery */}
                <label className="shipping-option">
                    <div className="shipping-option-content">
                        <input type="radio" name="shipping" />
                        <div>
                            <span className="shipping-label">Standard Delivery</span>
                            <p className="shipping-description">Delivery in 5 - 8 working days</p>
                        </div>
                    </div>
                    <span className="shipping-price">$8.00</span>
                </label>

                {/* Express Shipping (Checked by Default) */}
                <label className="shipping-option">
                    <div className="shipping-option-content">
                        <input
                            type="radio"
                            name="shipping"
                            value="express"
                            defaultChecked
                        />
                        <div>
                            <span className="shipping-label">Express Shipping</span>
                            <p className="shipping-description">Delivery in 3 - 5 working days</p>
                        </div>
                    </div>
                    <span className="shipping-price">$15.00</span>
                </label>

                {/* Local Pickup */}
                <label className="shipping-option">
                    <div className="shipping-option-content">
                        <input type="radio" name="shipping" />
                        <div>
                            <span className="shipping-label">Local Pickup</span>
                            <p className="shipping-description">Delivery in 1 - 2 working days</p>
                        </div>
                    </div>
                    <span className="shipping-price">Free</span>
                </label>
            </form>
        </div>
    );
};

export default ShippingMethod;
