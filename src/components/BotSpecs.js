import React from 'react';

export default function BotSpecs({ bot, onBack, onEnlist, onDischarge }) {
  if (!bot) return null;
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: 12 }}>⬅ Back</button>
      <div style={{ display: 'flex', gap: 16 }}>
        <div style={{ width: 260 }}>
          <img src={bot.avatar_url} alt={bot.name} style={{ width: '100%', borderRadius: 6 }} />
        </div>
        <div>
          <h2>{bot.name}</h2>
          <p><em>"{bot.catchphrase}"</em></p>
          <p>Class: {bot.bot_class}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>

          <div style={{ marginTop: 12 }}>
            <button onClick={() => onEnlist(bot)} style={{ marginRight: 8 }} className="button primary">Enlist</button>
            <button onClick={() => onDischarge(bot)} className="button danger">x Discharge</button>
          </div>
        </div>
      </div>
    </div>
  );
}
