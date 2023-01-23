import React from "react";

function DisplayCard({ bot, selected, onSelect }) {


    function handleDelete () {


    }




  return (
    <div className="display-card-container col my-2">
      <div className={`ui card ${selected ? 'selected' : ''}`} onClick={onSelect}>
        <div className="image">
          <img alt={`${bot.name} avatar`} src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">{bot.name}</div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            <h3>Health : {bot.health}</h3>
          </span>
          <span>
            <i className="icon lightning" />
            <h3>Damage :{bot.damage}</h3>
          </span>
          <span>
            <i className="icon shield" />
           <h3>Amor :{bot.armor}</h3> 
          </span>
        </div>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default DisplayCard;
