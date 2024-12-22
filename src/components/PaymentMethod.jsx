import React from "react";
import Checkbox from "./Checkbox";

const PaymentMethod = () => {
    return (
        <>
            {/* Title with Underscore */}
            <h2 className="text-sm font-bold mb-6 uppercase text-gray-500 dark:text-gray-400 tracking-wide">
                3. <span className="relative">
                    Payment Method
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 dark:bg-gray-700"></span>
                </span>
            </h2>

            <form className="space-y-4">
                {/* Credit Card (Checked by Default) */}
                <label className="flex justify-between items-center py-2">
                    <div className="flex items-start space-x-3">
                        <input
                            type="radio"
                            name="payment"
                            value="credit"
                            defaultChecked
                            className="w-5 h-5 border-2 border-gray-400 dark:border-gray-600 rounded-full appearance-none cursor-pointer transition-all duration-200 hover:border-green-500 checked:border-green-500 checked:bg-[radial-gradient(circle,#2ecc71_40%,transparent_40%)]"
                        />
                        <div>
                            <span className="font-bold text-gray-800 dark:text-gray-200">Credit Card</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Mastercard, Maestro, American Express, Visa are accepted
                            </p>
                        </div>
                    </div>
                </label>

                {/* Cash on Delivery */}
                <label className="flex justify-between items-center py-2">
                    <div className="flex items-start space-x-3">
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            className="w-5 h-5 border-2 border-gray-400 dark:border-gray-600 rounded-full appearance-none cursor-pointer transition-all duration-200 hover:border-green-500 checked:border-green-500 checked:bg-[radial-gradient(circle,#2ecc71_40%,transparent_40%)]"
                        />
                        <div>
                            <span className="font-bold text-gray-800 dark:text-gray-200">Cash on Delivery</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Pay with cash upon delivery
                            </p>
                        </div>
                    </div>
                </label>

                {/* Information Note with Checkbox (Default Checked and Toggleable) */}
                <Checkbox
                    label={
                        <span className="text-gray-700 dark:text-gray-300">
                            Your personal information will be used to process your order, to support your experience on this site, and for other purposes described in the{" "}
                            <a href="#" className="text-green-500 dark:text-green-400 underline">privacy policy</a>.
                        </span>
                    }
                    defaultChecked={true}
                />

                {/* Place Order Button */}
                <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 dark:hover:bg-green-700 shadow-md mt-6 font-bold transition-all w-fit min-w-[180px] text-center mx-auto">
                    Place an order
                </button>
            </form>
        </>
    );
};

export default PaymentMethod;
