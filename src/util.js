import React from 'react';

const FormatCurrency = (num) => {
    return (
        <div>
            {"€" + Number(num.toFixed(1)).toLocaleString() + " "}
        </div>
    );
};

export default FormatCurrency;