import React from "react";
import '../assets/styles/components/shippingDetails.scss';

const ShippingDetails = () => {
    return (
        <div className="shipping-details">
            <h2 className="shipping-title">1. SHIPPING DETAILS</h2>
            <form className="space-y-4">
                {/* First and Last Name */}
                <div className="shipping-field">
                    <div>
                        <label className="shipping-label">First name</label>
                        <input
                            type="text"
                            className="shipping-input"
                            placeholder="Your first name"
                        />
                    </div>
                    <div>
                        <label className="shipping-label">Last name</label>
                        <input
                            type="text"
                            className="shipping-input"
                            placeholder="Your last name"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="shipping-label">Email</label>
                    <div className="shipping-input-icon">
                        <img src="/images/email.jpg" alt="Email Icon" />
                        <input
                            type="email"
                            className="shipping-input"
                            placeholder="Email address"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="shipping-label">Phone</label>
                    <div className="shipping-input-icon">
                        <img src="/images/phone.jpg" alt="Phone Icon" />
                        <input
                            type="tel"
                            className="shipping-input"
                            placeholder="+1 ___ ___ ____"
                        />
                    </div>
                </div>

                {/* Country and City */}
                <div className="shipping-field">
                    <div>
                        <label className="shipping-label">Country</label>
                        <select className="shipping-input">
                            <option>Select a country</option>
                        </select>
                    </div>
                    <div>
                        <label className="shipping-label">City</label>
                        <select className="shipping-input">
                            <option>Select a city</option>
                        </select>
                    </div>
                </div>

                {/* Zip Code */}
                <div>
                    <label className="shipping-label">Zip code</label>
                    <input
                        type="text"
                        className="shipping-input"
                        placeholder="XXXX-XXXX"
                    />
                </div>

                {/* Address Line */}
                <div>
                    <label className="shipping-label">Address line</label>
                    <input
                        type="text"
                        className="shipping-input"
                        placeholder="Your address"
                    />
                </div>

                {/* Order Notes */}
                <div>
                    <label className="shipping-label">Order notes (optional)</label>
                    <textarea
                        className="shipping-textarea"
                        placeholder="Optional"
                    ></textarea>
                </div>

                {/* Checkbox */}
                <label className="shipping-checkbox">
                    <input type="checkbox" className="shipping-checkbox-input" />
                    <span className="shipping-checkbox-label">
                        Billing address same as delivery
                    </span>
                </label>
            </form>
        </div>
    );
};

export default ShippingDetails;
