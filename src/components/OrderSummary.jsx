import React from "react";

const OrderSummary = () => {
    return (
        <>
            {/* Order Title */}
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">
                Order summary <span className="text-sm text-gray-500 dark:text-gray-400">(4 items)</span>
            </h2>
            <hr className="my-2 border-t border-gray-200 dark:border-gray-700" /> {/* Separator Below Title */}

            {/* Product List */}
            <ul className="space-y-4 pb-4 mb-4">
                {/* Product Item 1 */}
                <li className="flex items-start justify-between py-2 relative">
                    <img
                        src="/images/candle.jpg"
                        alt="Candle in concrete bowl"
                        className="w-28 h-28 rounded-md object-cover"
                    />
                    <div className="flex-1 mx-4">
                        <p className="font-medium text-lg text-gray-800 dark:text-gray-200">Candle in concrete bowl</p>
                        {/* Color and Weight */}
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 space-x-4">
                            <span>
                                <span className="text-gray-500 dark:text-gray-400">Color:</span>{" "}
                                <span className="font-bold text-gray-800 dark:text-gray-200">Gray night</span>
                            </span>
                            <span>
                                <span className="text-gray-500 dark:text-gray-400">Weight:</span>{" "}
                                <span className="font-bold text-gray-800 dark:text-gray-200">140g</span>
                            </span>
                        </div>
                        {/* Quantity Controls */}
                        <div className="flex items-center mt-2 space-x-2">
                            <button className="w-6 h-6 text-sm text-gray-800 dark:text-gray-200">-</button>
                            <span className="text-gray-800 dark:text-gray-200">2</span>
                            <button className="w-6 h-6 text-sm text-gray-800 dark:text-gray-200">+</button>
                        </div>
                        <button className="absolute bottom-0 right-0 mb-2 mr-2">
                            <img src="/images/remove.jpg" alt="Remove Product" className="w-6 h-6" />
                        </button>
                    </div>
                    {/* Price Section */}
                    <div className="text-right">
                        <span className="block font-medium text-gray-700 dark:text-gray-300">$11.00</span>
                        <span className="block text-sm text-gray-400 line-through">$15.00</span>
                    </div>
                </li>
                <hr className="my-2 border-t border-gray-200 dark:border-gray-700" />

                {/* Product Item 2 */}
                <li className="flex items-start justify-between py-2 relative">
                    <img
                        src="/images/vase.jpg"
                        alt="Exquisite glass vase"
                        className="w-28 h-28 rounded-md object-cover"
                    />
                    <div className="flex-1 mx-4">
                        <p className="font-medium text-lg text-gray-800 dark:text-gray-200">Exquisite glass vase</p>
                        <div className="flex items-center mt-1 space-x-2">
                            <button className="w-6 h-6 text-sm text-gray-800 dark:text-gray-200">-</button>
                            <span className="text-gray-800 dark:text-gray-200">1</span>
                            <button className="w-6 h-6 text-sm text-gray-800 dark:text-gray-200">+</button>
                        </div>
                        <button className="absolute bottom-0 right-0 mb-2 mr-2">
                            <img src="/images/remove.jpg" alt="Remove Product" className="w-6 h-6" />
                        </button>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">$23.00</span>
                </li>
                <hr className="my-2 border-t border-gray-200 dark:border-gray-700" />

                {/* Product Item 3 */}
                <li className="flex items-start justify-between py-2 relative">
                    <img
                        src="/images/plate.jpg"
                        alt="Set for a dinner party of 7 items"
                        className="w-28 h-28 rounded-md object-cover"
                    />
                    <div className="flex-1 mx-4">
                        <p className="font-medium text-lg text-gray-800 dark:text-gray-200">Set for a dinner party of 7 items</p>
                        <div className="flex items-center mt-1 space-x-2">
                            <button className="w-6 h-6 text-sm text-gray-800 dark:text-gray-200">-</button>
                            <span className="text-gray-800 dark:text-gray-200">1</span>
                            <button className="w-6 h-6 text-sm text-gray-800 dark:text-gray-200">+</button>
                        </div>
                        <button className="absolute bottom-0 right-0 mb-2 mr-2">
                            <img src="/images/remove.jpg" alt="Remove Product" className="w-6 h-6" />
                        </button>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">$47.00</span>
                </li>
            </ul>
            <hr className="my-2 border-t border-gray-200 dark:border-gray-700" /> {/* Separator Below Last Product */}

            {/* Coupon Section */}
            <div className="relative flex items-center mt-6 mb-4 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 w-[75%]">
                <input
                    type="text"
                    className="flex-1 text-sm placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2 focus:outline-none bg-transparent dark:text-gray-200"
                    placeholder="YOUR COUPON CODE"
                />
                <button className="absolute right-1 top-1 bottom-1 px-4 py-1 text-sm font-bold text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-all border border-gray-300 dark:border-gray-700">
                    Apply coupon
                </button>
            </div>

            {/* Pricing Summary */}
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Subtotal:</span>
                    <span className="text-gray-900 dark:text-gray-200 font-medium">$92.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Taxes:</span>
                    <span className="text-gray-900 dark:text-gray-200 font-medium">$8.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">Shipping cost:</span>
                    <span className="text-gray-900 dark:text-gray-200 font-medium">$15.00</span>
                </div>
            </div>

            <hr className="my-2 border-t border-gray-200 dark:border-gray-700" /> {/* Separator After Shipping Cost */}

            {/* Total */}
            <div className="flex justify-between items-center font-bold pt-2 mt-4">
                <span className="text-gray-700 dark:text-gray-300 text-base">Total:</span>
                <span className="text-gray-900 dark:text-gray-200 text-2xl">$115.00</span>
            </div>

        </>
    );
};

export default OrderSummary;
