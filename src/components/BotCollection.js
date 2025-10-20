import React from 'react';
import BotCard from './BotCard';

export default function BotCollection({ bots, enlistBot, dischargeBot, onShow }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <BotCard
              bot={bot}
              onClick={() => onShow ? onShow(bot) : enlistBot(bot)}
              dischargeBot={dischargeBot}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
