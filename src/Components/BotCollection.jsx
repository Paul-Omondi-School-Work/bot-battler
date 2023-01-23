import React from 'react';
import DisplayCard from './DisplayCard';

function BotCollectionPage({ collection, selectedBots, setSelectedBots }) {
  const displayCollection = collection.map(bot => {
    return (
      <DisplayCard
        key={bot.id}
        bot={bot}
        selected={selectedBots.includes(bot)}
        onSelect={() => handleSelect(bot)}
      />
    );
  });

  const handleSelect = bot => {
    if (selectedBots.includes(bot)) {
      setSelectedBots(selectedBots.filter(b => b !== bot));
    } else {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  return (
    <div className="bot-collection-page">
      <div className="row mx-3 my-2">
        
        {displayCollection}
        
      </div>
    </div>
  );
}

export default BotCollectionPage;
