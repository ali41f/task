import React from 'react';

const SimpleButton = ({ filled, children }) => {
    return (
        <div
            className={filled ? "filledButton" : "outlinedButton"}
        >{children}</div>
    )
}

export default SimpleButton