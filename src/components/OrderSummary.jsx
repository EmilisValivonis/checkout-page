import React from "react";
import '../assets/styles/components/orderSummary.scss';

const OrderSummary = () => {
    return (
        <div className="order-summary">
            <h2 className="order-title">Order summary <span className="item-count">(4 items)</span></h2>
            <ul className="product-list">
                {/* Product Item 1 */}
                <li className="product-item">
                    <img src="/images/candle.jpg" alt="Candle in concrete bowl" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Candle in concrete bowl</p>
                        <p className="product-details">Color: Gray night · Weight: 140g</p>
                        <div className="product-controls">
                            <button className="product-control-btn">-</button>
                            <span>2</span>
                            <button className="product-control-btn">+</button>
                            <button className="product-remove">
                                <img src="/images/remove.jpg" alt="Remove Product" />
                            </button>
                        </div>
                    </div>
                    <span className="product-price">$11.00</span>
                </li>

                <hr className="product-separator" />

                {/* Product Item 2 */}
                <li className="product-item">
                    <img src="/images/vase.jpg" alt="Exquisite glass vase" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Exquisite glass vase</p>
                        <div className="product-controls">
                            <button className="product-control-btn">-</button>
                            <span>1</span>
                            <button className="product-control-btn">+</button>
                            <button className="product-remove">
                                <img src="/images/remove.jpg" alt="Remove Product" />
                            </button>
                        </div>
                    </div>
                    <span className="product-price">$23.00</span>
                </li>

                <hr className="product-separator" />

                {/* Product Item 3 */}
                <li className="product-item">
                    <img src="/images/plate.jpg" alt="Set for a dinner party of 7 items" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Set for a dinner party of 7 items</p>
                        <div className="product-controls">
                            <button className="product-control-btn">-</button>
                            <span>1</span>
                            <button className="product-control-btn">+</button>
                            <button className="product-remove">
                                <img src="/images/remove.jpg" alt="Remove Product" />
                            </button>
                        </div>
                    </div>
                    <span className="product-price">$47.00</span>
                </li>
            </ul>

            {/* Coupon Section */}
            <div className="coupon-section">
                <input type="text" className="coupon-input" placeholder="YOUR COUPON CODE" />
                <button className="apply-button">Apply coupon</button>
            </div>

            {/* Pricing Summary */}
            <div className="pricing-summary">
                <div className="pricing-row">
                    <span>Subtotal:</span>
                    <span>$92.00</span>
                </div>
                <div className="pricing-row">
                    <span>Taxes:</span>
                    <span>$8.00</span>
                </div>
                <div className="pricing-row">
                    <span>Shipping cost:</span>
                    <span>$15.00</span>
                </div>
                <div className="pricing-total">
                    <span>Total:</span>
                    <span>$115.00</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;