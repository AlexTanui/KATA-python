// components/ChipList.js
import React from 'react';
import Chip from './Chip';

const ChipList = ({ chips, maxChipsDisplayed, maxTextLength }) => {
  if (!chips || chips.length === 0 || maxChipsDisplayed <= 0 || maxTextLength < 1) {
    return <></>;
  }

  const displayedChips = chips.slice(0, maxChipsDisplayed);

  const remainingChipsCount = chips.length - maxChipsDisplayed;
  const exceedingText = remainingChipsCount > 0 ? `+${remainingChipsCount} more items` : null;

  return (
    <div>
      {displayedChips.map((chip, index) => (
        <Chip key={index} label={chip.label} maxTextLength={maxTextLength} />
      ))}
      {exceedingText && <aside>{exceedingText}</aside>}
    </div>
  );
};

export default ChipList;
