import React, { useState, useEffect } from 'react';
import './App.css'; // Импортируем стили

const ColorConverter = () => {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const [error, setError] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (hex.length === 7) {
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        setRgb(`RGB: (${r}, ${g}, ${b})`);
        setError('');
        setBackgroundColor(hex); // Устанавливаем цвет фона
      } else {
        setError('Ошибка');
        setRgb('Ошибка');
        setBackgroundColor('red'); // Устанавливаем красный фон при ошибке
      }
    } else {
      setRgb('');
      setError('');
      setBackgroundColor(''); // Сбрасываем фон, если ввод неполный
    }
  }, [hex]);

  const handleChange = (event) => {
    const value = event.target.value;
    setHex(value);
  };

  return (
    <div className="body-bg" style={{ backgroundColor }}>
      <input
        type="text"
        className="hex-input"
        value={hex}
        onChange={handleChange}
        placeholder="Введите HEX цвет (например, #FFFFFF)"
      />
      <div className="rgb-output">
        {rgb || (error ? <span className="error">{error}</span> : 'RGB')}
      </div>
    </div>
  );
};

export default ColorConverter;