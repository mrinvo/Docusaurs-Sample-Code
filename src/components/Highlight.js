import React from 'react';

export default function Highlight({text, color}) {
    return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: 'var(--ifm-color-white)',
        padding: '0.2rem 0.5rem',
      }}>
      {text}
    </span>
  );
}