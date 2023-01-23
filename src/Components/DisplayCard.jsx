import React,{useState} from "react";

function DisplayCard({ bot, selected, onSelect }) {
  const [prevBots, setprevBots] = useState(bot);

  function handleDelete(id) {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          setprevBots((prevBots) => prevBots.filter((bots) => bots.id !== id));
          alert("Honourably Discharged");
        } else {
          throw new Error("Bot is still fit for duty");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="display-card-container col my-2">
      <div className={`ui card ${selected ? "selected" : ""}`} onClick={onSelect} style={{padding:'10px'}}>
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
            <h3>Armor :{bot.armor}</h3>
          </span>
          <p className="card-text">BOT-CLASS: {bot.bot_class}</p>
          <p className="card-text">CREATED_AT: {bot.created_at}</p>
          <p className="card-text">UPDATED_AT: {bot.updated_at}</p>
        </div>
        <button className="bg-danger rounded" onClick={() => handleDelete(bot.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default DisplayCard;
