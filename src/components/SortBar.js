import React from 'react';

const CLASSES = ["Support","Medic","Assault","Defender","Captain","Witch"];

export default function SortBar({ filters, setFilters, sortKey, setSortKey }) {
  function toggleFilter(cls) {
    if (filters.includes(cls)) setFilters(filters.filter((c) => c !== cls));
    else setFilters([...filters, cls]);
  }

  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
      <div>
        <strong>Filter by class:</strong>
        <div style={{ display: 'flex', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
          {CLASSES.map((c) => (
            <button
              key={c}
              onClick={() => toggleFilter(c)}
              style={{
                padding: '6px 8px',
                borderRadius: 16,
                border: filters.includes(c) ? '1px solid #0366d6' : '1px solid #e1e4e8',
                background: filters.includes(c) ? '#e6f0ff' : '#fff',
                cursor: 'pointer'
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <strong>Sort by:</strong>
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)} style={{ marginLeft: 8 }}>
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    </div>
  );
}
