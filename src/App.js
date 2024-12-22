import React from "react";
import Header from "./components/Header";
import ShippingDetails from "./components/ShippingDetails";
import ShippingMethod from "./components/ShippingMethod";
import PaymentMethod from "./components/PaymentMethod";
import OrderSummary from "./components/OrderSummary";

function App() {
    return (
        <div className="App min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <Header />
            <div className="container mx-auto p-4 lg:px-8 mt-24">
                {/* Checkout Title */}
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12 lg:mb-16">
                    Checkout
                </h1>

                {/* Checkout Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-20">
                    {/* Forms Section */}
                    <div className="lg:col-span-2 space-y-12">
                        <ShippingDetails />
                        <ShippingMethod />
                        <PaymentMethod />
                    </div>

                    {/* Order Summary Section */}
                    <div className="lg:col-span-1 lg:ml-12 -mt-20 lg:-mt-24">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
