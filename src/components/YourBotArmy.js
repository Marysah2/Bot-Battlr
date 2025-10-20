import React from 'react';
import BotCard from './BotCard';

export default function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => releaseBot(bot)} dischargeBot={dischargeBot} />
        ))}
      </div>
    </div>
  );
}
