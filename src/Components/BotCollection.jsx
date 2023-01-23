import React, { useState } from 'react';
import DisplayCard from './DisplayCard';
import YourBotArmy from './YourBotArmy';

function BotCollectionPage({ collection }) {
  const [selectedBots, setSelectedBots] = useState([]);

  const handleSelect = (bot) => {
    if (selectedBots.includes(bot)) {
      setSelectedBots(selectedBots.filter((b) => b !== bot));
    } else {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const displayCollection = collection.map((bot) => (
    <DisplayCard
      key={bot.id}
      bot={bot}
      selected={selectedBots.includes(bot)}
      onSelect={() => handleSelect(bot)}
    />
  ));

  return (
    <>
    <h1 className="text-center">MY SQUAD</h1>
    <div className='row'>
        
    <YourBotArmy  selectedBots={selectedBots}/>
    </div> 
    <div className="bot-collection-page">
      <div className="row mx-2 my-2">
        {displayCollection}
      </div>
    </div>
    </>
  );
}

export default BotCollectionPage;
