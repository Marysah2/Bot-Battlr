import React from 'react';

export default function BotCard({ bot, onClick, dischargeBot }) {
  return (
    <div className={`card bot-card`}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p className="small">{bot.catchphrase}</p>
      <p className="small">Class: {bot.bot_class}</p>
      <p className="small">Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button onClick={onClick} className="button">Select</button>
        <button onClick={() => dischargeBot(bot)} className="button danger">x</button>
      </div>
    </div>
  );
}
