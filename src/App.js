import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import BotSpecs from './components/BotSpecs';
import './index.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortKey, setSortKey] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((r) => r.json())
      .then(setBots);
  }, []);

  function enlistBot(bot) {
    if (army.find((b) => b.id === bot.id)) return;
    // enforce one per class
    if (army.find((b) => b.bot_class === bot.bot_class)) return;
    setArmy([...army, bot]);
  }

  function releaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setArmy(army.filter((b) => b.id !== bot.id));
      if (selected && selected.id === bot.id) setSelected(null);
    });
  }

  function handleSelect(bot) {
    setSelected(bot);
  }

  function handleBack() {
    setSelected(null);
  }

  // apply filters
  let visible = bots.slice();
  if (filters.length) visible = visible.filter((b) => filters.includes(b.bot_class));
  if (sortKey) visible.sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <div className="container">
      <div className="header">
        <h1>Bot Battlr</h1>
        <div className="controls">
          <div className="small">Army size: {army.length}</div>
        </div>
      </div>

      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />

      <div style={{ marginTop: 12 }}>
        <SortBar filters={filters} setFilters={setFilters} sortKey={sortKey} setSortKey={setSortKey} />

        {selected ? (
          <BotSpecs bot={selected} onBack={handleBack} onEnlist={(b) => enlistBot(b)} onDischarge={dischargeBot} />
        ) : (
          <BotCollection bots={visible} enlistBot={enlistBot} dischargeBot={dischargeBot} onShow={handleSelect} />
        )}
      </div>
    </div>
  );
}

export default App;
