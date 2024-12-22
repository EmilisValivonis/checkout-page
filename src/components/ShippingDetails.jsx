import React from "react";
import Checkbox from "./Checkbox";

const ShippingDetails = () => {
    return (
        <>
            {/* Title with Underscore */}
            <h2 className="text-sm font-bold mb-6 uppercase text-gray-500 dark:text-gray-400 tracking-wide">
                1. <span className="relative">
                    SHIPPING DETAILS
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 dark:bg-gray-700"></span>
                </span>
            </h2>

            <form className="space-y-4">
                {/* First and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">First name</label>
                        <input
                            type="text"
                            className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                            placeholder="Your first name"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">Last name</label>
                        <input
                            type="text"
                            className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                            placeholder="Your last name"
                        />
                    </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">Email</label>
                        <div className="relative flex items-center w-full">
                            <img src="/images/email.jpg" alt="Email Icon" className="absolute left-3 w-5 h-5" />
                            <input
                                type="email"
                                className="pl-10 border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                placeholder="Email address"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">Phone</label>
                        <div className="relative flex items-center w-full">
                            <img src="/images/phone.jpg" alt="Phone Icon" className="absolute left-3 w-5 h-5" />
                            <input
                                type="tel"
                                className="pl-10 border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                placeholder="+1 ___ ___ ____"
                            />
                        </div>
                    </div>
                </div>

                {/* Country */}
                <div>
                    <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">Country</label>
                    <select className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                        <option>Select a country</option>
                    </select>
                </div>

                {/* City and Zip Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">City</label>
                        <select className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            <option>Select a city</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">Zip code</label>
                        <input
                            type="text"
                            className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                            placeholder="XXXX-XXXX"
                        />
                    </div>
                </div>

                {/* Address Line */}
                <div>
                    <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">Address line</label>
                    <input
                        type="text"
                        className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        placeholder="Your address"
                    />
                </div>

                {/* Order Notes */}
                <div>
                    <label className="text-sm font-bold block mb-1 text-gray-700 dark:text-gray-200">Order notes (optional)</label>
                    <textarea
                        rows="6"
                        className="border border-gray-300 dark:border-gray-600 p-2 rounded-lg w-full placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none"
                        placeholder="Optional"
                    ></textarea>
                </div>

                {/* Billing Address Checkbox */}
                <div className="mt-4">
                    <Checkbox label="Billing address same as delivery" />
                </div>
            </form>
        </>
    );
};

export default ShippingDetails;
