import React from 'react';

const Checkbox = ({ label, defaultChecked }) => {
    return (
        <label className="shipping-checkbox flex items-start space-x-2 mt-4">
            <input
                type="checkbox"
                defaultChecked={defaultChecked}
                className="shipping-checkbox-input w-5 h-5 border-2 border-gray-400 rounded-md appearance-none cursor-pointer transition-all duration-200 checked:border-green-500 checked:bg-green-500"
                style={{
                    backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\"white\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.5 12.5L2 9l1.5-1.5L5.5 9.5l6-6L13 5l-7.5 7.5z\"/></svg>')",
                    backgroundSize: "70%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />
            <span className="shipping-checkbox-label text-sm text-gray-700">{label}</span>
        </label>
    );
};

export default Checkbox;
