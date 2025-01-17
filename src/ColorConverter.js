import React, { useState } from 'react';

const ColorConverter = () => {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setHex(value);

    if (value.length === 7) {
      if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
        const r = parseInt(value.slice(1, 3), 16);
        const g = parseInt(value.slice(3, 5), 16);
        const b = parseInt(value.slice(5, 7), 16);
        setRgb(`RGB: (${r}, ${g}, ${b})`);
        setError('');
        document.body.style.backgroundColor = value;
      } else {
        setError('Ошибка');
        setRgb('Ошибка');
        document.body.style.backgroundColor = 'red';
      }
    } else {
      setRgb('');
      setError('');
      document.body.style.backgroundColor = '';
    }
  };

  return (
    <div>
      <input
        type="text"
        value={hex}
        onChange={handleChange}
        placeholder="Введите HEX цвет (например, #FFFFFF)"
      />
      {rgb && <h2>{rgb}</h2>}
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
    </div>
  );
};

export default ColorConverter;