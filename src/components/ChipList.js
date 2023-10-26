
import React from 'react';

const ChipList = ({ chips, maxChipsDisplayed, maxTextLength }) => {
  if (!chips || chips.length === 0 || maxChipsDisplayed <= 0 || maxTextLength < 1) {
    return <></>;
  }

  const displayedChips = chips.slice(0, maxChipsDisplayed);
  const remainingChipsCount = chips.length - maxChipsDisplayed;

  return (
    <div>
      {displayedChips.map((chip, index) => (
        <div key={index} data-testid={`chip-${index}`}>
          {chip.label.length > maxTextLength
            ? `${chip.label.slice(0, maxTextLength)}...`
            : chip.label}
        </div>
      ))}
      {remainingChipsCount > 0 && (
        <aside data-testid="exceeding-text">
          {`+${remainingChipsCount} more items`}
        </aside>
      )}
    </div>
  );
};

export default ChipList;
