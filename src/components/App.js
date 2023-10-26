// App.js
import React from 'react';
import ChipList from './components/ChipList';

const App = () => {
  const sampleChips = [
    { label: "123456" },
    { label: "1234567" },
    { label: "12345678" },
    { label: "12345" },
    { label: "123456789" }
  ];

  return (
    <div>
      <ChipList chips={sampleChips} maxChipsDisplayed={3} maxTextLength={6} />
    </div>
  );
};

export default App;
