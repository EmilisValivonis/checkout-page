import React from "react";
import Header from "./components/Header";
import ShippingDetails from "./components/ShippingDetails";
import ShippingMethod from "./components/ShippingMethod";
import PaymentMethod from "./components/PaymentMethod";
import OrderSummary from "./components/OrderSummary";

function App() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="container mx-auto p-4 lg:px-8">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <ShippingDetails />
                        <ShippingMethod />
                        <PaymentMethod />
                    </div>
                    <div>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
