// components/Chip.js
import React from 'react';

const Chip = ({ label, maxTextLength }) => {
    const truncatedLabel = label.slice(0, maxTextLength);
    const displayLabel = label.length > maxTextLength ? `${truncatedLabel}...` : truncatedLabel;

    return (
        <div>
            {displayLabel}
        </div>
    );
};

export default Chip;
