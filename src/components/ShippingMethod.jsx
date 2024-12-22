import React from "react";

const ShippingMethod = () => {
    return (
        <>
            {/* Title with Underscore */}
            <h2 className="text-sm font-bold mb-6 uppercase text-gray-500 dark:text-gray-400 tracking-wide">
                2. <span className="relative">
                    Shipping Method
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-300 dark:bg-gray-700"></span>
                </span>
            </h2>

            <form className="space-y-4">
                {/* Standard Delivery */}
                <label className="flex justify-between items-center py-2">
                    <div className="flex items-start space-x-3">
                        <input
                            type="radio"
                            name="shipping"
                            className="w-5 h-5 border-2 border-gray-400 dark:border-gray-600 rounded-full appearance-none cursor-pointer transition-all duration-200 ease-in-out hover:border-green-primary checked:border-green-primary checked:bg-[radial-gradient(circle,#2ecc71_40%,transparent_40%)]"
                        />
                        <div>
                            <span className="font-bold text-gray-800 dark:text-gray-200">Standard Delivery</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Delivery in 5 - 8 working days</p>
                        </div>
                    </div>
                    <span className="font-bold text-gray-800 dark:text-gray-200">$8.00</span>
                </label>

                {/* Express Shipping (Checked by Default) */}
                <label className="flex justify-between items-center py-2">
                    <div className="flex items-start space-x-3">
                        <input
                            type="radio"
                            name="shipping"
                            value="express"
                            defaultChecked
                            className="w-5 h-5 border-2 border-gray-400 dark:border-gray-600 rounded-full appearance-none cursor-pointer transition-all duration-200 ease-in-out hover:border-green-primary checked:border-green-primary checked:bg-[radial-gradient(circle,#2ecc71_40%,transparent_40%)]"
                        />
                        <div>
                            <span className="font-bold text-gray-800 dark:text-gray-200">Express Shipping</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Delivery in 3 - 5 working days</p>
                        </div>
                    </div>
                    <span className="font-bold text-gray-800 dark:text-gray-200">$15.00</span>
                </label>

                {/* Local Pickup */}
                <label className="flex justify-between items-center py-2">
                    <div className="flex items-start space-x-3">
                        <input
                            type="radio"
                            name="shipping"
                            className="w-5 h-5 border-2 border-gray-400 dark:border-gray-600 rounded-full appearance-none cursor-pointer transition-all duration-200 ease-in-out hover:border-green-primary checked:border-green-primary checked:bg-[radial-gradient(circle,#2ecc71_40%,transparent_40%)]"
                        />
                        <div>
                            <span className="font-bold text-gray-800 dark:text-gray-200">Local Pickup</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Delivery in 1 - 2 working days</p>
                        </div>
                    </div>
                    <span className="font-bold text-gray-800 dark:text-gray-200">Free</span>
                </label>
            </form>
        </>
    );
};

export default ShippingMethod;
