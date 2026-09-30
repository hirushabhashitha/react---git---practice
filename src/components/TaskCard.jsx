import React from 'react';

// 'props' හරහා පිටතින් එන data ලබා ගනී
function TaskCard({ title, status, priority }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px'
    }}>
      <h3>{title}</h3>
      <p>Status: <strong>{status}</strong></p>
      <p>Priority: <span style={{ color: priority === 'High' ? 'red' : 'green' }}>{priority}</span></p>
    </div>
  );
}

export default TaskCard;