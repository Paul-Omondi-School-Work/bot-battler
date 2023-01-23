import React, { useState } from "react";

function YourBotArmy({ selectedBots, setSelectedBots }) {
const removeWarrior = (warrior) => {
setSelectedBots((prevWarriors) => prevWarriors.filter((s) => s.id !== warrior.id));
};

return (
<>
{selectedBots.map((warrior) => {
const {
avatar_url,
id,
name,
armor,
catchphrase,
bot_class,
health,
damage,
created_at,
updated_at
} = warrior;
return (
<div key={id} className="card col-sm-6 col-md-4 col-lg-3" style={{ width: "20rem" }}>
<img src={avatar_url} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{name}</h5>
<p className="card-text">ARMOR: {armor}</p>
<p className="card-text">CATCHPHRASE: {catchphrase}</p>
<p className="card-text">BOT-CLASS: {bot_class}</p>
<p className="card-text">HEALTH: {health}</p>
<p className="card-text">DAMAGE: {damage}</p>
<p className="card-text">CREATED_AT: {created_at}</p>
<p className="card-text">UPDATED_AT: {updated_at}</p>
<button className="rounded bg-dark" onClick={() => removeWarrior(warrior)}>Release Vet</button>
</div>
</div>
);
})}
</>
);
}

export default YourBotArmy;